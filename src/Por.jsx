import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Shield, Server, ExternalLink } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';
import './styles.css';
import './i18n'; // Import the config
import { useTranslation } from 'react-i18next';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Por() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

const { t, i18n } = useTranslation();

  // Function to change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.body.dir = i18n.t('dir'); // Handles Right-to-Left for Arabic
  };

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x14b8a6,
        backgroundColor: 0x050505,
        points: 10.0,
        maxDistance: 20.0,
        spacing: 16.0
      }));
    }
    return () => { if (vantaEffect) vantaEffect.destroy(); };
  }, [vantaEffect]);

  return (
    <div className="relative min-h-screen text-white selection:bg-teal-500/30 overflow-x-hidden">

{/* LANGUAGE SWITCHER */}
      <div className="fixed bottom-5 right-5 z-[100] flex gap-2">
        {['en', 'ar', 'fr'].map((lng) => (
          <button 
            key={lng}
            onClick={() => changeLanguage(lng)}
            className="px-3 py-1 glass-card border border-teal-500/30 rounded uppercase text-xs hover:bg-teal-500 hover:text-black transition"
          >
            {lng}
          </button>
        ))}
      </div>


      {/* 3D DATA GRID BACKGROUND */}
      <div ref={vantaRef} className="fixed inset-0 -z-10" />

  {/* NAVIGATION */}
      <nav className="fixed w-full top-0 z-50 glass-card py-4 px-8 flex justify-between items-center bg-black/20 backdrop-blur-md border-b border-white/5">
        <div className="text-xl font-bold tracking-wider uppercase">M-AKO<span className="text-teal-400">.</span></div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-teal-400 transition">{t('nav_about')}</a>
          <a href="#skills" className="hover:text-teal-400 transition">{t('nav_skills')}</a>
          <a href="#projects" className="hover:text-teal-400 transition">{t('nav_projects')}</a>
          <a href="#education" className="hover:text-teal-400 transition">{t('nav_education')}</a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        
        {/* HERO SECTION */}
        <motion.section initial="hidden" animate="visible" variants={fadeInUp} className="min-h-[70vh] flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-teal-400 font-mono tracking-widest text-xs uppercase bg-teal-500/10 w-fit px-3 py-1 rounded-full border border-teal-500/20">
              {t('hero_status')}
            </h2>
            <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter">
              MOHAMED <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">AKKOUH</span>
            </h1>
            <p className="text-lg text-gray-400 font-light max-w-md leading-relaxed">
              {t('hero_subtitle')}
            </p>
            <div className="flex gap-4 pt-4">
              <a href='https://github.com/mohamed-ako' target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-teal-500 text-gray-900 font-bold rounded-lg hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] transition">
                {t('hero_cta_github')}
              </a>
              <a href="/Mohamed_AKKOUH_CV.pdf" target="_blank" className="px-8 py-3 glass-card rounded-lg border border-white/10 hover:bg-white/10 transition">
                {t('hero_cta_cv')}
              </a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 glass-card rounded-full flex items-center justify-center overflow-hidden border-2 border-teal-500/30">
              <img src="/my-profile.png" alt="Mohamed AKKOUH" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition duration-700 scale-110" />
            </div>
          </div>
        </motion.section>

        {/* ABOUT SECTION */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} id="about" className="py-20">
          <div className="glass-card rounded-3xl p-10 relative overflow-hidden border border-white/5">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Shield size={120} />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-teal-400">{t('about_title')}</h3>
            <div className="grid md:grid-cols-2 gap-10 text-gray-300 leading-relaxed z-10 relative">
              <p>{t('about_p1')}</p>
              <p>{t('about_p2')}</p>
            </div>
          </div>
        </motion.section>

        {/* TECH ARSENAL */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} id="skills" className="py-20">
          <h3 className="text-3xl font-bold mb-10 text-center uppercase tracking-widest">{t('skills_title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-teal-500/30 transition">
              <Code className="text-teal-400 mb-4" size={32} />
              <h4 className="text-xl font-bold mb-4">{t('skills_frontend')}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>React.js & React Native</li>
                <li>JavaScript (ES6+)</li>
                <li>Tailwind CSS & Bootstrap</li>
              </ul>
            </div>
            <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-teal-500/30 transition">
              <Server className="text-teal-400 mb-4" size={32} />
              <h4 className="text-xl font-bold mb-4">{t('skills_backend')}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Laravel & PHP</li>
                <li>Express.js & Node.js</li>
                <li>Python (Flask / Analytics)</li>
              </ul>
            </div>
            <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-teal-500/30 transition">
              <Database className="text-teal-400 mb-4" size={32} />
              <h4 className="text-xl font-bold mb-4">{t('skills_data')}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>MongoDB, MySQL, SQLite3</li>
                <li>AWS & Azure Cloud</li>
                <li>Active Directory & Linux</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20">
          <h3 className="text-3xl font-bold mb-10 border-b border-white/10 pb-4 uppercase tracking-widest text-teal-400">
            {t('nav_projects')}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Mini Market Pro", desc: t('proj_1_desc'), tech: ["React", "Vite", "Firebase"], link: "https://github.com/mohamed-ako/mini-market-pro" },
              { name: "Hybrid Movie Recommender", desc: t('proj_2_desc'), tech: ["Flask", "React", "MongoDB"], link: "https://github.com/mohamed-ako/Intelligent-Movie-Recommendation-Website" },
              { name: "Coffee Shop POS", desc: t('proj_3_desc'), tech: ["MERN", "SQLite3"], link: "https://github.com/mohamed-ako/SmartRif-Cafe" },
              { name: "Real Estate Platform", desc: t('proj_4_desc'), tech: ["Laravel", "React"], link: "https://github.com/mohamed-ako/darek_v2" }
            ].map((proj, i) => (
              <Tilt key={i} tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.15}>
                <div className="glass-card rounded-2xl p-8 group border border-white/5 hover:border-teal-500/50 transition-colors h-full bg-white/5">
                  <div className="flex justify-between mb-4">
                    <h4 className="text-2xl font-bold group-hover:text-teal-400 transition">{proj.name}</h4>
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-teal-400 opacity-50 group-hover:opacity-100 transition hover:scale-110">
                      <ExternalLink size={24} />
                    </a>
                  </div>
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">{proj.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map(tech => (
                      <span key={tech} className="text-[10px] font-mono px-2 py-1 bg-teal-900/30 text-teal-300 rounded border border-teal-500/20">{tech}</span>
                    ))}
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </section>


        {/* ACADEMIC JOURNEY */}
<motion.section 
  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
  id="education" className="py-20"
>
          <div className="glass-card rounded-3xl p-10 relative overflow-hidden border border-white/5">

  <h3 className="text-3xl font-bold mb-10 text-teal-400 uppercase tracking-widest">{t('edu_title')}</h3>
  <div className="relative border-l border-gray-700 ml-4 space-y-10 pb-8">
    
    {/* IT Bachelor */}
    <div className="relative pl-8">
      <div className="absolute w-4 h-4 bg-teal-500 rounded-full -left-[8.5px] top-1 shadow-[0_0_10px_#14b8a6]"></div>
      <h4 className="text-xl font-bold">{t('edu_it_degree')}</h4>
      <p className="text-teal-400 text-sm font-mono mb-2">SUPMTI (GPA: 17.36/20 - Très Bien)</p>
      <p className="text-gray-400 text-sm leading-relaxed">{t('edu_it_desc')}</p>
    </div>

    {/* Specialized Technician */}
    <div className="relative pl-8">
      <div className="absolute w-4 h-4 bg-gray-600 rounded-full -left-[8.5px] top-1"></div>
      <h4 className="text-xl font-bold">{t('edu_tech_degree')}</h4>
      <p className="text-gray-400 text-sm font-mono mb-2">ISTA</p>
      <p className="text-gray-400 text-sm leading-relaxed">{t('edu_tech_desc')}</p>
    </div>

    {/* Law Bachelor */}
    <div className="relative pl-8">
      <div className="absolute w-4 h-4 bg-gray-600 rounded-full -left-[8.5px] top-1"></div>
      <h4 className="text-xl font-bold">{t('edu_law_degree')}</h4>
      <p className="text-gray-400 text-sm font-mono mb-2">Abdelmalek Essaâdi University</p>
      <p className="text-gray-400 text-sm leading-relaxed">{t('edu_law_desc')}</p>
    </div>

  </div>
  </div>
</motion.section>
      </main>
    </div>
  );
}