import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const submissionsFile = path.join(__dirname, 'submissions.json');
const configFile = path.join(__dirname, 'config.json');

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || crypto.randomBytes(32).toString('hex').slice(0, 32);
const IV_LENGTH = 16;

function encrypt(text) {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return iv.toString('hex') + ':' + encrypted.toString('hex');
}

function decrypt(text) {
  const parts = text.split(':');
  const iv = Buffer.from(parts.shift(), 'hex');
  const encryptedText = Buffer.from(parts.join(':'), 'hex');
  const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

function readConfig() {
  if (!fs.existsSync(configFile)) {
    return { gmailUser: '', gmailAppPassword: '', emailTo: '' };
  }
  const data = JSON.parse(fs.readFileSync(configFile, 'utf-8'));
  return {
    gmailUser: data.gmailUser || '',
    gmailAppPassword: data.gmailAppPassword ? decrypt(data.gmailAppPassword) : '',
    emailTo: data.emailTo || ''
  };
}

function writeConfig(config) {
  const data = {
    gmailUser: config.gmailUser,
    gmailAppPassword: config.gmailAppPassword ? encrypt(config.gmailAppPassword) : '',
    emailTo: config.emailTo
  };
  fs.writeFileSync(configFile, JSON.stringify(data, null, 2));
}

function getTransporter(config) {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.gmailUser,
      pass: config.gmailAppPassword
    }
  });
}

function readSubmissions() {
  if (!fs.existsSync(submissionsFile)) {
    fs.writeFileSync(submissionsFile, '[]');
    return [];
  }
  return JSON.parse(fs.readFileSync(submissionsFile, 'utf-8'));
}

function writeSubmissions(data) {
  fs.writeFileSync(submissionsFile, JSON.stringify(data, null, 2));
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Admin: Get Gmail config (password masked)
app.get('/api/admin/config', (req, res) => {
  const config = readConfig();
  res.json({
    gmailUser: config.gmailUser,
    emailTo: config.emailTo,
    isConfigured: !!(config.gmailUser && config.gmailAppPassword)
  });
});

// Admin: Save Gmail config
app.post('/api/admin/config', (req, res) => {
  const { gmailUser, gmailAppPassword, emailTo } = req.body;

  if (!gmailUser || !validateEmail(gmailUser)) {
    return res.status(400).json({ error: 'Valid Gmail address is required' });
  }
  if (!gmailAppPassword) {
    return res.status(400).json({ error: 'App password is required' });
  }

  writeConfig({ gmailUser, gmailAppPassword, emailTo: emailTo || gmailUser });

  res.json({ success: true, message: 'Configuration saved' });
});

// Admin: Get all submissions
app.get('/api/admin/submissions', (req, res) => {
  const submissions = readSubmissions();
  res.json(submissions);
});

// Contact form submission
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !name.trim()) {
    return res.status(400).json({ error: 'Name is required' });
  }
  if (!email || !validateEmail(email)) {
    return res.status(400).json({ error: 'Valid email is required' });
  }
  if (!message || !message.trim()) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const submission = {
    id: Date.now(),
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    createdAt: new Date().toISOString()
  };

  const submissions = readSubmissions();
  submissions.push(submission);
  writeSubmissions(submissions);

  const config = readConfig();
  if (config.gmailUser && config.gmailAppPassword) {
    try {
      const transporter = getTransporter(config);
      await transporter.sendMail({
        from: config.gmailUser,
        to: config.emailTo || config.gmailUser,
        replyTo: email,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #90f488; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #555; width: 120px;">Name:</td>
                <td style="padding: 10px; color: #333;">${name}</td>
              </tr>
              <tr style="background: #f9f9f9;">
                <td style="padding: 10px; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 10px; color: #333;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #555;">Message:</td>
                <td style="padding: 10px; color: #333;">${message}</td>
              </tr>
            </table>
            <p style="margin-top: 20px; font-size: 12px; color: #999;">
              Submitted at: ${new Date().toLocaleString()}
            </p>
          </div>
        `
      });
      console.log(`Email sent for submission from ${name} <${email}>`);
    } catch (err) {
      console.error('Failed to send email:', err.message);
    }
  } else {
    console.log(`Submission saved (email not configured): ${name} <${email}>`);
  }

  res.status(201).json({ success: true, id: submission.id });
});

app.get('/api/contact', (req, res) => {
  const submissions = readSubmissions();
  res.json(submissions);
});

app.get('/api/contact/:id', (req, res) => {
  const submissions = readSubmissions();
  const submission = submissions.find(s => s.id === parseInt(req.params.id));
  if (!submission) {
    return res.status(404).json({ error: 'Submission not found' });
  }
  res.json(submission);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});