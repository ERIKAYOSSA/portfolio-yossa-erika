import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png';
import profileImage from '../assets/profile.jpg';
import profile from '../assets/profile.jpg';
import '../styles/EnglishHome.css';
import { FaLightbulb, FaDraftingCompass, FaCode, FaBug, FaRocket } from 'react-icons/fa';
import resumePDF from '../assets/resume.pdf';
import backgroundVideo from '../assets/background.MOV';
import skillsVideo from '../assets/vid.MOV';
import projetsImage from '../assets/projets.jpg';
import projet1Image from '../assets/projet1.jpg';
import footerVideo from '../assets/footer-video.MOV';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';


const roles = [
  "DESIGNER UI/UX",
  "DÉVELOPPEUR FRONTEND",
  "TECHNICIEN INFORMATIQUE",
  "MANAGER DES PROJETS OU CHEF DE PROJET"
];

const EnglishHome = () => {
  const [currentRole, setCurrentRole] = useState(0); // ✅ OK
  const [theme, setTheme] = useState('dark');        // ✅ OK

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const [projects, setProjects] = useState([
  {
    image: projetsImage,
    type: 'Web App',
    title: 'Patrick Travel Services',
    link: 'https://patrick-travel-services.onrender.com',
    liked: false,
    likes: 0,
  },
  {
    image: projet1Image,
    type: 'Web App',
    title: 'Tableau de bord logistique',
    link: 'https://marylis-logistics-backend.onrender.com',
    liked: false,
    likes: 0,
  },
  {
    image: '../assets/project3.jpg',
    type: 'Web App',
    title: 'Logistics Dashboard',
    link: 'https://patrick-travel-services.onrender.com',
    liked: false,
    likes: 0,
  },
  {
    image: '../assets/project2.jpg',
    type: 'Mobile App',
    title: 'Logistics Dashboard',
    link: 'https://patrick-travel-services.onrender.com',
    liked: false,
    likes: 0,
  },
  {
    image: '../assets/project1.jpg',
    type: 'Web/Mobile App',
    title: 'Logistics Dashboard',
    link: 'https://patrick-travel-services.onrender.com',
    liked: false,
    likes: 0,
  },
  
]);

const toggleLike = (index) => {
  const updated = [...projects];
  updated[index].liked = !updated[index].liked;
  if (updated[index].liked) {
    updated[index].likes += 1;
  } else {
    updated[index].likes -= 1;
  }
  setProjects(updated);
};

const stepRefs = useRef([]);
const steps = [
  {
    icon: <FaLightbulb />,
    title: 'Analyse des besoins',
    description: 'Comprendre les objectifs métier, les besoins des utilisateurs et les contraintes techniques.',
  },
  {
    icon: <FaDraftingCompass />,
    title: 'Conception & Prototypage',
    description: 'Créer des wireframes, maquettes et parcours utilisateur avec clarté visuelle.',
  },
  {
    icon: <FaCode />,
    title: 'Développement',
    description: 'Construire des composants réutilisables, la logique backend et des animations interactives.',
  },
  {
    icon: <FaBug />,
    title: 'Tests & Assurance qualité',
    description: 'Garantir la compatibilité multiplateforme et éliminer les bugs.',
  },
  {
    icon: <FaRocket />,
    title: 'Déploiement & Maintenance',
    description: 'Lancer avec Git + Netlify et maintenir via des scripts d’automatisation.',
  },
];
const Process = () => {
  const stepRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 150);
        }
      });
    }, { threshold: 0.2 });

    stepRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);
};
const [activeTab, setActiveTab] = useState('education');

const education = [
  {
    degree: "Licence en Génie Logiciel",
    school: "Institut Supérieur de Management et d'Entrepreneuriat",
    year: "2024 – 2025",
  },
  {
    degree: "Brevet de Technicien Supérieur (BTS) en Génie Logiciel",
    school: "Institut Supérieur de Management et d'Entrepreneuriat",
    year: "2022 – 2024",
  },
  {
    degree: "Licence 1 en Informatique",
    school: "Université de Douala",
    year: "2021 – 2022",
  },
  {
    degree: "Baccalauréat Général (GCE Advanced Level)",
    school: "Collège SACRED HEART de Douala",
    year: "2019 – 2021",
    subjects: "(Chimie, Physique, Mathématiques, Biologie, Mathématiques Supérieures)",
  },
];

const designSkills = [
  { name: 'PHOTOSHOP', level: '100%' },
  { name: 'CANVA', level: '80%' },
  { name: 'ADOBE ILLUSTRATOR', level: '70%' },
  { name: 'DESIGN', level: '90%' },
];

const devSkills = [
  { name: 'HTML', level: '95%' },
  { name: 'CSS', level: '80%' },
  { name: 'JAVASCRIPT', level: '90%' },
  { name: 'JAVA', level: '85%' },
  { name: 'PYTHON', level: '90%' },
  { name: 'PHP', level: '90%' },
];

const experience = [
  {
    title: 'Développeur Full Stack',
    company: 'MARYLIS LOGISTICS',
    year: '2024 – Aujourd’hui',
    description: 'Responsable du développement de tableaux de bord logistiques et d’applications web multilingues avec FastAPI et React.',
  },
];
const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Message sent:', formData);
  // Tu peux connecter à Formspree, EmailJS ou ton backend ici
  setFormData({ name: '', email: '', subject: '', message: '' });
};

  return (
    <div className={`english-home ${theme === 'dark' ? 'theme-dark' : 'theme-light'}`}>
      <header className="header">
        <img src={logo} alt="Yossa Erika Logo" className="header-logo" />
        <nav className="nav-menu">
          <a href="#home">Accueil</a>
          <a href="#about">À propos</a>
          <a href="#projects">Projets</a>
          <a href="#skills">Compétences</a>
          <a href="#process">Processus</a>
          <a href="#resume">CV</a>
          <a href="#contact">Contact</a>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
      </header>

     {/* HOME SECTION */}
      <section id="home" className="home-section">
        <div className="video-container">
          <video autoPlay muted loop playsInline className="full-video">
            <source src={backgroundVideo} type="video/mp4" />
            <source src={backgroundVideo} type="video/quicktime" />
            Votre navigateur ne prend pas en charge la balise vidéo.
          </video>

          <div className="overlay-content">
            <div className="left-content">
              <h1>Bienvenu dans mon  <span class="blue-text">PORTFOLIO</span></h1>
              <h2 className="role-animated">{roles[currentRole]}</h2>

              <p className="description">
                Je suis un développeur Front-End expérimenté et designer UI/UX, avec plus de 2 ans d’expérience dans la création et la conception de sites web et d’applications web depuis zéro....
              </p>

              <div className="social-section">
                <h3><span className="blue-text">TROUVE MOI</span></h3>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="social-icon" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="social-icon" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="social-icon" />
                    </a>
                </div>
                </div>
            </div>

            <div className="right-content">
              <img src={profile} alt="Yossa Erika Portrait" className="profile-photo" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about-section">
  <div className="about-left">
    <h2 className="fade-in">Apropos ? 👨‍💻</h2>
    <p className="fade-in delay-1">
      Je suis un développeur full-stack passionné, spécialisé dans l’innovation technologique, avec une expérience dans la création d’applications web et mobiles ainsi que de solutions robotiques avancées. Mon expertise couvre l’ensemble du cycle de développement, de la conception au déploiement.
    </p> 
    <p className="fade-in delay-2">
      Avec une solide expérience dans la résolution de problèmes complexes et une passion pour les technologies émergentes, je développe des solutions qui repoussent les limites du possible. Ma philosophie : transformer des idées complexes en solutions élégantes et accessibles.
    </p>  

    <div className="stats fade-in delay-3">
      <div><strong>50+</strong> Commits par semaine</div>
      <div><strong>24/7</strong> Passioné du codage</div>
    </div>
    <br></br>

    <div className="skills-buttons fade-in delay-4">
      <button>🌐 DEVELOPPEMENT WEB</button>
      <button>📱 DEVELOPPEMENT MOBILE </button>
      <button>🎨 INFOGRAPHIE</button>
      <button>🧠 INTELLIGENCE ARTIFICIEL</button>
      <button>🎨 UX/UI DESIGN</button>
    </div>
  </div>

  <div className="about-right">
  <div className="info-box slide-up delay-0">
    <h3>🎓 Stage Academic</h3>
    <p>
      Stage 1: Developpement web à HOPITAL BETHESDA DE MALANGUE<br />
      Stage 2: Developpement web et mobile à MARYLIS LOGISTICS
    </p>
  </div>

  <div className="info-box slide-up delay-1">
    <h3>💼 Experience</h3>
    <p>2 années dans le developpement fullstack</p>
  </div>

  <div className="info-box slide-up delay-2">
    <h3>🚀 Projets</h3>
    <p>10+ projets completés avec succès</p>
  </div>

  <div className="info-box slide-up delay-3">
    <h3>🎯 Loisirs</h3>
    <p>Design, IA, Lecture, Sport</p>
  </div>
</div>
</section>

      {/* SKILLS SECTION */}
      <section id="skills" className="skills-section">
  <h2 className="skills-title">COMPETENCES</h2>

  <div className="skills-grid">
    {/* BOX 1 — Web Development */}
    <div className="skill-box">
      <div className="skill-header">
        <span className="skill-icon">🌐</span>
        <h3>Devloppement web</h3>
      </div>
      {[
        { name: 'HTML / CSS', level: '95%' },
        { name: 'JavaScript', level: '95%' },
        { name: 'PHP', level: '95%' },
        { name: 'React / Vue', level: '90%' },
        { name: 'Python', level: '80%' },
      ].map((skill, index) => (
        <div className="skill-item" key={index}>
          <p>{skill.name}</p>
          <div className="progress-bar">
            <div style={{ width: skill.level }}></div>
          </div>
        </div>
      ))}
    </div>

    {/* BOX 2 — Mobile Development */}
    <div className="skill-box">
      <div className="skill-header">
        <span className="skill-icon">📱</span>
        <h3>Developpement Mobile</h3>
      </div>
      {[
        { name: 'React Native', level: '90%' },
        { name: 'Flutter', level: '85%' },
        { name: 'Java', level: '80%' },
      ].map((skill, index) => (
        <div className="skill-item" key={index}>
          <p>{skill.name}</p>
          <div className="progress-bar">
            <div style={{ width: skill.level }}></div>
          </div>
        </div>
      ))}
    </div>

    {/* BOX 3 — Project Management */}
    <div className="skill-box">
      <div className="skill-header">
        <span className="skill-icon">🧠</span>
        <h3>Management de projet</h3>
      </div>
      {[
        { name: 'Communication efficace', level: '100%' },
        { name: 'Postman', level: '80%' },
        { name: 'Scrum', level: '90%' },
        { name: 'Agile', level: '90%' },
      ].map((skill, index) => (
        <div className="skill-item" key={index}>
          <p>{skill.name}</p>
          <div className="progress-bar">
            <div style={{ width: skill.level }}></div>
          </div>
        </div>
      ))}
    </div>
  </div>
  {/* ✅ Vidéo en bas */}
  <div className={`skills-video ${theme === 'light' ? 'blurred' : ''}`}>
    <video autoPlay muted loop playsInline>
      <source src={skillsVideo} type="video/mp4" />
      Votre ordinateur ne supporte pas cette video.
    </video>
  </div>

</section>

{/* PROJECTS SECTION */}

<section id="projects" className="projects-section">
  <h2 className="projects-title">PROJETS</h2>

  <div className="projects-grid">
    {projects.map((project, index) => (
      <div className="project-card" key={index}>
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-info">
          <h4>{project.type}</h4>
          <p>{project.title}</p>
        </div>
        <div className="project-actions">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-btn">
            Voir Projet
          </a>
          <button className="like-btn" onClick={() => toggleLike(index)}>
            <span className={project.liked ? 'heart liked' : 'heart'}>♡</span>
            <span className="like-count">{project.likes}</span>
          </button>
        </div>
      </div>
    ))}
  </div>
</section>
{/* PROCESS SECTION */}
<section id="process" className="process-page">
      <h2 className="process-title">PROCESSUS</h2>
      <p className="process-intro">
        Voici comment je conçois un logiciel — de l’idée au déploiement :
      </p>

      <div className="process-grid">
        {steps.map((step, index) => (
          <div
            className="process-card"
            key={index}
            ref={(el) => (stepRefs.current[index] = el)}
          >
            <div className="process-icon">{step.icon}</div>
            <h3 className="process-step-title">{step.title}</h3>
            <p className="process-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>

{/* RESUME SECTION */}
<section id="resume" className="resume-section">
  <h2 className="resume-title">MON CURICULUM VITAE</h2>

  <div className="resume-tabs">
    <button className={activeTab === 'education' ? 'active' : ''} onClick={() => setActiveTab('education')}>Formation</button>
    <button className={activeTab === 'skills' ? 'active' : ''} onClick={() => setActiveTab('skills')}>Competences Professionel</button>
    <button className={activeTab === 'experience' ? 'active' : ''} onClick={() => setActiveTab('experience')}>Experience Professionel</button>
  </div>

  <div className="resume-content">
    {activeTab === 'education' && (
      <div className="education-list">
        {education.map((item, index) => (
          <div className="education-item" key={index}>
            <h4>{item.degree}</h4>
            <p>{item.school}</p>
            {item.subjects && <p className="subjects">{item.subjects}</p>}
            <span className="year-tag">{item.year}</span>
          </div>
        ))}
      </div>
    )}

    {activeTab === 'skills' && (
      <div className="skills-grid">
        <div className="skills-column">
          <h3>Competences en design</h3>
          {designSkills.map((skill, index) => (
            <div className="skill-bar" key={index}>
              <span>{skill.name}</span>
              <div className="bar">
                <div className="fill" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
        <div className="skills-column">
          <h3>Competences en developpement</h3>
          {devSkills.map((skill, index) => (
            <div className="skill-bar" key={index}>
              <span>{skill.name}</span>
              <div className="bar">
                <div className="fill" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}

    {activeTab === 'experience' && (
      <div className="experience-list">
        {experience.map((item, index) => (
          <div className="experience-item" key={index}>
            <h4>{item.title}</h4>
            <p>{item.company}</p>
            <span>{item.year}</span>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>
    )}
  </div>

  <div className="resume-download">
    <a href={resumePDF} download className="download-btn">Telecharger mon cv</a>
  </div>
</section>

{/* CONTACT SECTION */}
<section id="contact" className="contact-section">
  <h2 className="contact-title">ME CONTACTER</h2>
  <div className="contact-grid">
    {/* Left Box: Form */}
    <div className="contact-form">
      <h3>Veuillez m'envoyer un message</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
        <textarea name="message" placeholder="Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit">ENVOYER</button>
      </form>
    </div>

    {/* Right Box: Profile */}
    <div className="contact-info">
        <img src={profileImage} alt="Yossa Erika" className="contact-photo" />
        <h3>DESIGNER UI/UX</h3>
        <h3>DÉVELOPPEUR FRONTEND</h3>
        <h3>TECHNICIEN INFORMATIQUE</h3>
        <p>Je suis disponible pour des missions freelance. Contactez-moi par email ou téléphone.</p>
        <p><strong>Téléphone :</strong> <span className="contact-highlight">+237 656543469</span></p>
        <p><strong>Email :</strong> <span className="contact-highlight">erikayossa0507@gmail.com</span></p>
        <h4>RETROUVEZ-MOI</h4>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/yossa-erika" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.facebook.com/yossa.erika" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://github.com/yossa-erika" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  </div>
</section>
<footer className="footer-section">
  <video className="footer-video" autoPlay muted loop>
    <source src={footerVideo} type="video/mp4" />
    Votre ordinateur ne supporte pas cette video.
  </video>

  <div className="footer-overlay">
    <img src={logo} alt="Yossa Logo" className="footer-logo" />
    <p className="footer-text">© ERIKAYOSSA.DEV 2024. Tous droit reservés.</p>
    <div className="scroll-top-wrapper">
  <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
    ↑
  </button>
</div>
  </div>
</footer>
<div style={{
  position: 'fixed',
  bottom: '20px',
  right: '30px',
  zIndex: 999
}}>
  <button style={{
    backgroundColor: '#6a11cb',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    fontSize: '1.5rem',
    width: '40px',
    height: '40px',
    cursor: 'pointer'
  }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
    ↑
  </button>
</div>
    </div>
  );
};

export default EnglishHome;



