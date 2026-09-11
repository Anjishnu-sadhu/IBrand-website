const fs = require('fs');
const filePath = 'd:/IBRAND/src/index.css';
let content = fs.readFileSync(filePath, 'utf8');

const fallbackIndex = content.indexOf('/*  / *   S e r v i c e s');
if (fallbackIndex > -1) {
  content = content.substring(0, fallbackIndex);
} else {
  console.log("Could not find the corrupted block.");
}

const correctCss = `
/* Services Section */
.services-section {
  background-color: #0f1110;
  color: #fff;
  padding: 6rem 0;
}

.services-container {
  max-width: 1200px;
  margin: 0 auto;
}

.services-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  letter-spacing: -0.5px;
}

.services-subtitle {
  color: #f59e0b;
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 600;
  margin-bottom: 2rem;
}

.services-desc {
  font-size: 1rem;
  color: #aaa;
  max-width: 900px;
  line-height: 1.6;
  margin-bottom: 4rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.service-card {
  background-color: #1a1a1a;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s ease, background-color 0.2s;
  cursor: pointer;
}

.service-card:hover {
  background-color: #222;
  transform: translateY(-5px);
}

.service-icon-wrapper {
  background-color: #0a0a0a;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: auto;
}

.service-name {
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: auto;
}

.social-card {
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
}

.social-card p {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  line-height: 1.4;
  color: #ddd;
}

.social-icons {
  display: flex;
  gap: 1.5rem;
}

.social-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  transition: transform 0.2s;
}

.social-icon:hover {
  transform: scale(1.1);
}

.be-icon { background-color: #0057ff; font-weight: bold; font-family: serif; }
.in-icon { background-color: #0077b5; }
.ig-icon { background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); }
.fb-icon { background-color: #1877f2; }
.yt-icon { background-color: #ff0000; }
.x-icon { background-color: #000; border: 1px solid #333; }

@media (max-width: 992px) {
  .services-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .services-grid { grid-template-columns: 1fr; }
  .social-card { grid-column: span 1; }
}
`;

fs.writeFileSync(filePath, content + correctCss);
console.log('Fixed index.css');
