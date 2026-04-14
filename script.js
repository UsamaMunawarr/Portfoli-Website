// Data Constants based on PRD
const projects = [
  { title: "CAD Mortality Prediction", desc: "ML + Stats, MPhil thesis predicting mortality rates.", category: "Research", tags: ["Python", "ML", "Stats"], github: "#", demo: "#" },
  { title: "Diabetes Prediction", desc: "Compared 8 machine learning algorithms for accuracy.", category: "ML/AI", tags: ["Scikit-Learn", "Python"], github: "#", demo: "#" },
  { title: "Iris Dataset Multinomial", desc: "Multinomial Logistic Regression on Iris data.", category: "Statistics", tags: ["R Programming", "Stats"], github: "#", demo: "#" },
  { title: "K-Drama Recommender", desc: "Content-based filtering system.", category: "Web App", tags: ["Python", "Streamlit"], github: "#", demo: "#" },
  { title: "MetaScreen", desc: "Systematic Review App handling inclusion/exclusion.", category: "Web App", tags: ["Streamlit"], github: "#", demo: "#" },
  { title: "EuroSCORE II Meta-Analysis", desc: "Research synthesis of mortality models.", category: "Research", tags: ["R", "Meta-Analysis"], github: "#", demo: "#" }
];

const tools = [
  { name: "Python (Anaconda)", category: "Programming", diff: "Beginner", diffClass: "diff-easy", icon: "fab fa-python", desc: "Download link, setup video, install guide" },
  { name: "R + RStudio", category: "Programming", diff: "Beginner", diffClass: "diff-easy", icon: "fab fa-r-project", desc: "Download, setup steps for Stats" },
  { name: "VS Code", category: "IDE", diff: "Beginner", diffClass: "diff-easy", icon: "fas fa-code", desc: "Extensions list, setup tips" },
  { name: "Power BI Desktop", category: "BI", diff: "Intermediate", diffClass: "", icon: "fas fa-chart-bar", desc: "Download + tutorial link" },
  { name: "SPSS", category: "Statistics", diff: "Beginner", diffClass: "diff-easy", icon: "fas fa-table", desc: "Link + tips" },
  { name: "SQL (MySQL)", category: "Database", diff: "Intermediate", diffClass: "", icon: "fas fa-database", desc: "Setup guide" }
];

const blogs = [
  { title: "EuroSCORE II: A Meta-Analysis Journey", date: "April 10, 2026", read: "5 min read", cat: "Research", desc: "A deep dive into evaluating the EuroSCORE II mortality prediction model." },
  { title: "How I Built MetaScreen", date: "March 25, 2026", read: "8 min read", cat: "Web App", desc: "Building a Systematic Review App in Streamlit end to end." },
  { title: "ML vs. Logistic Regression", date: "Feb 14, 2026", read: "6 min read", cat: "ML/AI", desc: "Comparison of techniques for CAD Mortality Prediction." }
];

const books = [
  { title: "An Introduction to Statistical Learning", author: "James et al.", cat: "Statistics", cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=300", link: "#" },
  { title: "Python for Data Analysis", author: "Wes McKinney", cat: "Python", cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=300", link: "#" },
  { title: "Hands-On ML with Scikit-Learn", author: "Aurélien Géron", cat: "ML/AI", cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=300", link: "#" }
];

// Helper Functions to Render Cards
function renderProjects(data, containerId) {
  const container = document.getElementById(containerId);
  if(!container) return;
  container.innerHTML = data.map(p => `
    <div class="glass-card project-card">
      <div class="p-img"><img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=500" alt="project"></div>
      <span class="tag">${p.category}</span>
      <h3 style="margin: 10px 0;">${p.title}</h3>
      <p style="color:var(--text-secondary); font-size:0.9rem;">${p.desc}</p>
      <div class="tag-list">
        ${p.tags.map(t => `<span class="tag" style="background:rgba(255,255,255,0.05); color:var(--text-primary); border:1px solid var(--border-color);">${t}</span>`).join('')}
      </div>
      <div class="card-actions">
        <a href="${p.github}" target="_blank"><i class="fab fa-github"></i> Source</a>
        <a href="${p.demo}" target="_blank"><i class="fas fa-external-link-alt"></i> Demo</a>
      </div>
    </div>
  `).join('');
}

function renderTools(data) {
  const container = document.getElementById('tools-container');
  if(!container) return;
  container.innerHTML = data.map(t => `
    <div class="glass-card tool-card">
      <i class="${t.icon} tool-icon"></i>
      <h3>${t.name}</h3>
      <span class="difficulty ${t.diffClass}">${t.diff}</span>
      <p style="color:var(--text-secondary); font-size:0.85rem; margin:15px 0;">${t.desc}</p>
      <a href="#" class="btn-secondary" style="font-size:0.8rem; padding: 6px 12px; width:100%;"><i class="fas fa-download"></i> Download</a>
    </div>
  `).join('');
}

function renderBlogs() {
  const container = document.getElementById('blogs-container');
  if(!container) return;
  container.innerHTML = blogs.map(b => `
    <div class="glass-card">
      <div style="width:100%; height:150px; background:#2a2a35; border-radius:8px; margin-bottom:15px; overflow:hidden;">
        <img src="https://images.unsplash.com/photo-1456324504439-dcbab10bb515?auto=format&fit=crop&q=80&w=500" style="width:100%; height:100%; object-fit:cover;" alt="Blog">
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
        <span class="tag">${b.cat}</span>
        <span style="font-size:0.8rem; color:var(--text-secondary);">${b.read}</span>
      </div>
      <h4 style="margin-bottom:10px;">${b.title}</h4>
      <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:15px;">${b.desc}</p>
      <div style="font-size:0.8rem; color:var(--text-secondary); border-top:1px solid var(--border-color); padding-top:10px; display:flex; justify-content:space-between;">
        <span>${b.date}</span>
        <a href="#" style="color:var(--primary-accent);">Read More &rarr;</a>
      </div>
    </div>
  `).join('');
}

function renderBooks() {
  const container = document.getElementById('books-container');
  if(!container) return;
  container.innerHTML = books.map(b => `
    <div class="glass-card" style="display:flex; gap:15px; align-items:center;">
      <img src="${b.cover}" alt="Book" style="width:80px; height:120px; object-fit:cover; border-radius:4px;">
      <div>
        <span class="tag" style="padding:2px 6px; font-size:0.7rem;">${b.cat}</span>
        <h4 style="margin:5px 0; font-size:1rem;">${b.title}</h4>
        <p style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:10px;">${b.author}</p>
        <a href="${b.link}" class="btn-secondary" style="padding:5px 10px; font-size:0.8rem;"><i class="fas fa-book-open"></i> Link</a>
      </div>
    </div>
  `).join('');
}

// Initial renders
document.addEventListener("DOMContentLoaded", () => {
  renderProjects(projects.slice(0, 3), 'home-projects-container');
  renderProjects(projects, 'projects-container');
  renderTools(tools);
  renderBlogs();
  renderBooks();
  
  // Hash Routing Logic
  function handleRoute() {
    let hash = window.location.hash || '#home';
    document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    
    let targetSec = document.querySelector(hash);
    if(targetSec) {
      targetSec.classList.add('active');
      window.scrollTo(0,0);
    } else {
      document.getElementById('home').classList.add('active');
      hash = '#home';
    }
    
    document.querySelectorAll(`.nav-links a[href="${hash}"]`).forEach(a => a.classList.add('active'));
    
    // Close mobile menu on route change
    document.querySelector('.nav-links').classList.remove('show');
  }
  
  window.addEventListener('hashchange', handleRoute);
  handleRoute(); // Call on load

  // Hamburger Menu
  document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
  });

  // Navbar shrink on scroll
  window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
      document.getElementById('navbar').classList.add('scrolled');
    } else {
      document.getElementById('navbar').classList.remove('scrolled');
    }
  });

  // Typewriter effect in Hero
  const roles = ["Statistician", "Data Scientist", "ML Researcher"];
  let roleIdx = 0;
  let charIdx = 0;
  let currentWord = "";
  let isDeleting = false;
  const typewriterElement = document.getElementById("typewriter");

  function type() {
    if(!typewriterElement) return;
    const word = roles[roleIdx];
    
    if (isDeleting) {
      currentWord = word.substring(0, charIdx - 1);
      charIdx--;
    } else {
      currentWord = word.substring(0, charIdx + 1);
      charIdx++;
    }

    typewriterElement.innerHTML = `> ${currentWord}<span style="animation: blink 0.7s infinite;">_</span>`;

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIdx === word.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }
  if(typewriterElement) type();
  
  // Custom styling for blinking cursor
  const style = document.createElement('style');
  style.innerHTML = `@keyframes blink { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }`;
  document.head.appendChild(style);

  // Tools filtering logic
  document.querySelectorAll('#tool-filters .filter-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      document.querySelectorAll('#tool-filters .filter-tab').forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      const filter = e.target.getAttribute('data-filter');
      if(filter === 'all') {
        renderTools(tools);
      } else {
        renderTools(tools.filter(t => t.category === filter));
      }
    });
  });

  // Initialize Particle Background
  initParticles();
});

// Particle Effect Canvas
function initParticles() {
  const canvas = document.getElementById('bg-canvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;
  let particles = [];
  
  window.addEventListener('resize', () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.size = Math.random() * 2;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      
      if(this.x < 0 || this.x > w) this.vx *= -1;
      if(this.y < 0 || this.y > h) this.vy *= -1;
    }
    draw() {
      ctx.fillStyle = 'rgba(108, 99, 255, 0.5)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  for(let i = 0; i < 50; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, w, h);
    
    for(let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
      // Draw lines between particles
      for(let j = i; j < particles.length; j++) {
        let dx = particles[i].x - particles[j].x;
        let dy = particles[i].y - particles[j].y;
        let dist = Math.sqrt(dx*dx + dy*dy);
        if(dist < 150) {
          ctx.strokeStyle = `rgba(108, 99, 255, ${0.1 - dist/1500})`;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
}
