import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import logo from '../assets/logo.png';
import videoBg from '../assets/vid.MOV'; // Import de la vidéo

const Home = () => {
  const navigate = useNavigate();

  const content = {
    fr: {
      title: "Bienvenue sur le portfolio de YOSSA ERIKA",
      subtitle: "Développeur créatif & chef de projet technique",
    },
    en: {
      title: "Welcome to Yossa Erika's Portfolio",
      subtitle: "Creative Developer & Technical Project Lead",
    },
  };

  const handleLangSwitch = (selectedLang) => {
    if (selectedLang === 'en') {
      navigate('/en');
    } else if (selectedLang === 'fr') {
      navigate('/fr');
    }
  };

  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* 🎬 Vidéo en fond */}
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={videoBg} type="video/mp4" />
        Votre navigateur ne prend pas en charge la balise vidéo.
      </video>

      <div className="lang-switch">
        <button onClick={() => handleLangSwitch('fr')}>FR</button>
        <button onClick={() => handleLangSwitch('en')}>EN</button>
      </div>

      <motion.h1 className="home-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        {content.fr.title}
      </motion.h1>

      <motion.p className="home-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        {content.fr.subtitle}
      </motion.p>

      <motion.img
        src={logo}
        alt="Yossa Erika Logo"
        className="home-logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5 }}
      />
    </motion.div>
  );
};

export default Home;