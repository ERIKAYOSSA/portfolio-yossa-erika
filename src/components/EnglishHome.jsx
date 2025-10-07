import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png';
import profileImage from '../assets/profile.jpg';
import profile from '../assets/profile.jpg';
import '../styles/EnglishHome.css';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaLightbulb, FaDraftingCompass, FaCode, FaBug, FaRocket } from 'react-icons/fa';
import resumePDF from '../assets/resume.pdf';
import backgroundVideo from '../assets/background.MOV';
import skillsVideo from '../assets/vid.MOV';
import projetsImage from '../assets/projets.jpg';
import projet1Image from '../assets/projet1.jpg';
import footerVideo from '../assets/footer-video.MOV';


const roles = [
  "UI/UX DESIGNER",
  "FRONT-END DEVELOPER",
  "IT TECHNICIAN",
  "PROJECT MANAGER"
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
    title: 'Logistics Dashboard',
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
    title: 'Requirement Analysis',
    description: 'Understand business goals, user needs, and technical constraints.',
  },
  {
    icon: <FaDraftingCompass />,
    title: 'Design & Prototyping',
    description: 'Create wireframes, mockups, and user flows with visual clarity.',
  },
  {
    icon: <FaCode />,
    title: 'Development',
    description: 'Build reusable components, backend logic, and animations.',
  },
  {
    icon: <FaBug />,
    title: 'Testing & QA',
    description: 'Ensure cross-platform compatibility and eliminate bugs.',
  },
  {
    icon: <FaRocket />,
    title: 'Deployment & Maintenance',
    description: 'Launch with Git + Netlify and maintain with automation scripts.',
  },
];

const [activeTab, setActiveTab] = useState('education');

const education = [
  {
    degree: 'Bachelor Degree in Software Engineering',
    school: 'Higher Institute of Management and Entrepreneurship',
    year: '2024 – 2025',
  },
  {
    degree: 'Higher National Diploma (HND) in SWE',
    school: 'Higher Institute of Management and Entrepreneurship',
    year: '2022 – 2024',
  },
  {
    degree: 'Bachelor 1 in Computer Science',
    school: 'University of Douala',
    year: '2021 – 2022',
  },
  {
    degree: 'GENERAL CERTIFICATE OF EDUCATION ADVANCED LEVEL',
    school: 'SACRED HEART COLLEGE OF DOUALA',
    year: '2019 – 2021',
    subjects: '(Chemistry, Physics, Mathematics, Biology, Further Mathematics)',
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
    title: 'Full Stack Developer',
    company: 'MARYLIS LOGISTICS',
    year: '2024 – Present',
    description: 'Led the development of logistics dashboards and multilingual web apps with FastAPI and React.',
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
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#process">Process </a>
          <a href="#resume">Resume</a>
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
            Your browser does not support the video tag.
          </video>

          <div className="overlay-content">
            <div className="left-content">
              <h1>Welcome to my <span class="blue-text">PORTFOLIO</span></h1>
              <h2 className="role-animated">{roles[currentRole]}</h2>

              <p className="description">
                I am an experienced Front-End Developer and UI/UX Designer with 2+ years of experience building and designing websites and web apps from scratch...
              </p>

              <div className="social-section">
                <h3><span className="blue-text">FIND ME</span></h3>
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
    <h2 className="fade-in">About me ? 👨‍💻</h2>
    <p className="fade-in delay-1">
      I am a passionate full-stack developer specializing in technological innovation, with experience in creating web and mobile applications, as well as advanced robotic solutions. My expertise spans the entire development cycle, from design to deployment.
    </p>
    <p className="fade-in delay-2">
      With a strong background in solving complex problems and a passion for emerging technologies, I develop solutions that push the boundaries of what's possible. My philosophy: transforming complex ideas into elegant and accessible solutions.
    </p>

    <div className="stats fade-in delay-3">
      <div><strong>50+</strong> Commits per week</div>
      <div><strong>24/7</strong> Passion for coding</div>
    </div>
    <br></br>

    <div className="skills-buttons fade-in delay-4">
      <button>🌐 WEB DEVELOPMENT</button>
      <button>📱 MOBILE DEVELOPMENT</button>
      <button>🎨 INFOGRAPHIC</button>
      <button>🧠 ARTIFICIAL INTELLIGENCE</button>
      <button>🎨 UX/UI DESIGN</button>
    </div>
  </div>

  <div className="about-right">
  <div className="info-box slide-up delay-0">
    <h3>🎓 Academic Internships</h3>
    <p>
      Internship 1: Web Development at HOPITAL BETHESDA DE MALANGUE<br />
      Internship 2: Web and mobile development at MARYLIS LOGISTICS
    </p>
  </div>

  <div className="info-box slide-up delay-1">
    <h3>💼 Experience</h3>
    <p>2 years in full-stack development</p>
  </div>

  <div className="info-box slide-up delay-2">
    <h3>🚀 Projects</h3>
    <p>10+ successfully completed projects</p>
  </div>

  <div className="info-box slide-up delay-3">
    <h3>🎯 Hobbies</h3>
    <p>Design, AI, Reading, Sports</p>
  </div>
</div>
</section>

      {/* SKILLS SECTION */}
      <section id="skills" className="skills-section">
  <h2 className="skills-title">SKILLS</h2>

  <div className="skills-grid">
    {/* BOX 1 — Web Development */}
    <div className="skill-box">
      <div className="skill-header">
        <span className="skill-icon">🌐</span>
        <h3>Web Development</h3>
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
        <h3>Mobile Development</h3>
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
        <h3>Project Management</h3>
      </div>
      {[
        { name: 'Effective Communication', level: '100%' },
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
      Your browser does not support the video tag.
    </video>
  </div>

</section>

{/* PROJECTS SECTION */}

<section id="projects" className="projects-section">
  <h2 className="projects-title">PROJECTS</h2>

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
            View Project
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
      <h2 className="process-title">PROCESS</h2>
      <p className="process-intro">
        Here's how I build software — from concept to deployment:
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
  <h2 className="resume-title">MY RESUME</h2>

  <div className="resume-tabs">
    <button className={activeTab === 'education' ? 'active' : ''} onClick={() => setActiveTab('education')}>Education</button>
    <button className={activeTab === 'skills' ? 'active' : ''} onClick={() => setActiveTab('skills')}>Professional Skills</button>
    <button className={activeTab === 'experience' ? 'active' : ''} onClick={() => setActiveTab('experience')}>Professional Experience</button>
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
          <h3>Design Skills</h3>
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
          <h3>Development Skills</h3>
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
    <a href={resumePDF} download className="download-btn">Download My Resume</a>
  </div>
</section>

{/* CONTACT SECTION */}
<section id="contact" className="contact-section">
  <h2 className="contact-title">CONTACT ME</h2>
  <div className="contact-grid">
    {/* Left Box: Form */}
    <div className="contact-form">
      <h3>Send me a message</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
        <textarea name="message" placeholder="Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>

    {/* Right Box: Profile */}
    <div className="contact-info">
      <img src={profileImage} alt="Yossa Erika" className="contact-photo" />
      <h3>UI/UX DESIGNER</h3>
      <h3>FRONTEND DEVELOPER</h3>
      <h3>IT TECHNICIAN</h3>
      <p>I am available for freelance work. Connect with me via email or phone.</p>
      <p><strong>Téléphone :</strong> <span className="contact-highlight">+237 656543469</span></p>
      <p><strong>Email :</strong> <span className="contact-highlight">erikayossa0507@gmail.com</span></p>
      <h4>FIND WITH ME</h4>
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
    Your browser does not support the video tag.
  </video>

  <div className="footer-overlay">
    <img src={logo} alt="Yossa Logo" className="footer-logo" />
    <p className="footer-text">© ERIKAYOSSA.DEV 2024. All rights reserved.</p>
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



