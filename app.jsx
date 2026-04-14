const { useState, useEffect } = React;

const projects = [
  { title: "Smart Exam & Quick Quiz Platform", desc: "Generative AI / LLM Project. AI-powered exam and quiz system using LLMs for automatic question generation.", category: "AI / LLM", tags: ["Python", "Streamlit", "LLM"], github: "#", demo: "#" },
  { title: "Shopping Mall Flow Counter", desc: "Applied AI / Computer Vision Project. Real-time system to monitor crowd flow and enhance safety.", category: "CV", tags: ["Computer Vision", "Python"], github: "#", demo: "#" },
  { title: "CAD Mortality Prediction", desc: "ML + Stats, MPhil thesis predicting mortality rates.", category: "Research", tags: ["Python", "ML", "Stats"], github: "#", demo: "#" },
  { title: "Diabetes Prediction", desc: "Compared 8 machine learning algorithms for accuracy.", category: "ML/AI", tags: ["Scikit-Learn", "Python"], github: "#", demo: "#" },
  { title: "K-Drama Recommender", desc: "Content-based filtering system.", category: "Web App", tags: ["Python", "Streamlit"], github: "#", demo: "#" },
  { title: "MetaScreen", desc: "Systematic Review App handling inclusion/exclusion.", category: "Web App", tags: ["Streamlit"], github: "#", demo: "#" }
];

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setActiveTab(hash);
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <>
      <nav>
        <div className="container nav-content">
          <div className="logo">Abu<span>Usama</span></div>
          <div className="nav-links">
            <a href="#home"><button className={activeTab === 'home' ? 'active' : ''}>Home</button></a>
            <a href="#about"><button className={activeTab === 'about' ? 'active' : ''}>About</button></a>
            <a href="#projects"><button className={activeTab === 'projects' ? 'active' : ''}>Projects</button></a>
            <a href="#contact"><button className={activeTab === 'contact' ? 'active' : ''}>Contact</button></a>
          </div>
        </div>
      </nav>

      <main className="main-content container animate-fade-in">
        {activeTab === 'home' && (
          <section className="hero" id="home">
            <div className="hero-img-wrap">
              {/* developer-bg-removed.png will be generated soon */}
              <img src="developer-bg-removed.png" alt="Abu Usama" className="hero-img" onError={(e)=>{e.target.onerror=null; e.target.src='developer.jpeg'}} />
            </div>
            <span className="hero-subtitle">
              <i className="ph-fill ph-code" style={{marginRight: 6}}></i>
              AI Expert & Data Science Freelancer
            </span>
            <h1>Driving AI Innovation & Next-Gen Analytics</h1>
            <p>Transforming complex datasets into actionable business strategies and scalable machine learning solutions.</p>
            
            <div className="action-btns">
              <a href="#projects" className="btn btn-primary">
                View Portfolio
              </a>
              <a href="#contact" className="btn btn-secondary">
                Let's Talk
              </a>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <i className="ph ph-briefcase stat-icon"></i>
                <div className="stat-val">30+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-card">
                <i className="ph ph-users stat-icon"></i>
                <div className="stat-val">60+</div>
                <div className="stat-label">Students Mentored</div>
              </div>
              <div className="stat-card">
                <i className="ph ph-calendar-check stat-icon"></i>
                <div className="stat-val">3+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'projects' && (
          <section id="projects" className="animate-fade-in">
            <div className="section-head">
              <h2>Client, Freelance, and Academic Builds</h2>
              <p>Explore my data science, machine learning, and computer vision projects.</p>
            </div>
            
            <div className="grid-container">
              {projects.map((p, idx) => (
                <div className="card" key={idx}>
                  <div className="card-title">{p.title}</div>
                  <div className="card-desc">{p.desc}</div>
                  <div className="card-tags">
                    <span className="tag">{p.category}</span>
                    {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                  </div>
                  <div className="card-footer">
                    <a href={p.github} className="link-btn"><i className="ph ph-github-logo"></i> GitHub</a>
                    <a href={p.demo} className="link-btn"><i className="ph ph-browsers"></i> Demo</a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'about' && (
          <section id="about" className="animate-fade-in" style={{maxWidth: 800, margin: '0 auto'}}>
            <div className="section-head">
              <h2>About Me</h2>
              <p>Academic background & professional specializations.</p>
            </div>
            
            <div style={{marginBottom: 40}}>
              <h3 style={{marginBottom: 16}}>MPhil in Statistics</h3>
              <p style={{color: 'var(--text-muted)'}}>Specialization in Adv. ML & Deep Learning for Medical Risk Prediction with XAI.</p>
            </div>

            <div style={{marginBottom: 40}}>
              <h3 style={{marginBottom: 16}}>Core Technical Skills</h3>
              <div style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
                 {["Machine Learning", "Deep Learning", "Computer Vision", "LLMs & RAG", "Data-centric Business Strategy", "Strategic Planning for AI/ML projects"].map(skill => (
                   <span className="tag" key={skill} style={{fontSize: '0.9rem', padding: '8px 16px', background: 'var(--surface-1)'}}>{skill}</span>
                 ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === 'contact' && (
          <section id="contact" className="animate-fade-in">
             <div className="section-head">
              <h2>Let's build something data‑driven</h2>
              <p>Available for freelance projects, consulting, and training. Based in Pakistan, working globally.</p>
            </div>
            <div className="contact-wrap">
               <div className="contact-info">
                  <div className="contact-item">
                    <i className="ph ph-envelope-simple"></i>
                    <div>
                       <div style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>Email</div>
                       <a href="mailto:usamamunawaar@gmail.com">usamamunawaar@gmail.com</a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="ph ph-map-pin"></i>
                    <div>
                       <div style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>Location</div>
                       <span>Gujranwala, Pakistan (Remote Worldwide)</span>
                    </div>
                  </div>
               </div>
            </div>
          </section>
        )}
      </main>

      <footer>
        <div className="container">
          <div style={{display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 16, fontSize: '1.5rem', color: 'var(--text-main)'}}>
             <a href="#"><i className="ph ph-linkedin-logo"></i></a>
             <a href="#"><i className="ph ph-github-logo"></i></a>
             <a href="#"><i className="ph ph-twitter-logo"></i></a>
          </div>
          <p>© 2026 Abu Usama. Freelance Data Scientist • AI/ML • Big Data • Data Analytics.</p>
          <p style={{marginTop: 8, color: 'var(--accent)'}}>Transforming data into actionable insights, one algorithm at a time.</p>
        </div>
      </footer>
    </>
  );
};

const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);
