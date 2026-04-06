import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Shield, Server, ExternalLink, Briefcase, Terminal, Bug, Mail } from 'lucide-react';
// import { InstagramIcon } from 'lucide-react';
// import { Facebook, MessageSquare } from 'lucide-react';


import Tilt from 'react-parallax-tilt';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';
import '../styles.css';
import './i18n'; 
import { useTranslation } from 'react-i18next';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Portfolio() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);
  const { t, i18n } = useTranslation();

  // --- GAME STATE ---
  const [gameActive, setGameActive] = useState(false);
  const [score, setScore] = useState(0);
  const [anomalies, setAnomalies] = useState([]);

  // --- LANGUAGE SWITCHER ---
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.body.dir = i18n.t('dir');
  };

  // --- VANTA BACKGROUND ---
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

  // --- GAME LOGIC ---
  useEffect(() => {
    let spawnInterval;
    if (gameActive) {
      spawnInterval = setInterval(() => {
        const newAnomaly = {
          id: Date.now(),
          x: Math.random() * 80 + 10, // 10% to 90% vw
          y: Math.random() * 80 + 10, // 10% to 90% vh
        };
        setAnomalies(prev => [...prev, newAnomaly]);
        
        // Auto-remove anomaly after 2.5 seconds
        setTimeout(() => {
          setAnomalies(prev => prev.filter(a => a.id !== newAnomaly.id));
        }, 2500);
      }, 900);
    } else {
      setAnomalies([]);
      setScore(0);
    }
    return () => clearInterval(spawnInterval);
  }, [gameActive]);

  const patchAnomaly = (id) => {
    setScore(s => s + 1);
    setAnomalies(prev => prev.filter(a => a.id !== id));
  };

  const projectData = [
    { name: "Mini Market Pro", mission: t('proj_1_mission'), execution: t('proj_1_execution'), impact: t('proj_1_impact'), tech: ["React", "Vite", "Firebase"], link: "https://github.com/mohamed-ako/mini-market-pro" },
    { name: "Hybrid Movie Recommender", mission: t('proj_2_mission'), execution: t('proj_2_execution'), impact: t('proj_2_impact'), tech: ["Flask", "React", "MongoDB"], link: "https://github.com/mohamed-ako/Intelligent-Movie-Recommendation-Website" },
    { name: "Coffee Shop POS", mission: t('proj_3_mission'), execution: t('proj_3_execution'), impact: t('proj_3_impact'), tech: ["MERN", "SQLite3"], link: "https://github.com/mohamed-ako/SmartRif-Cafe" },
    { name: "Real Estate Platform", mission: t('proj_4_mission'), execution: t('proj_4_execution'), impact: t('proj_4_impact'), tech: ["Laravel", "React"], link: "https://github.com/mohamed-ako/darek_v2" },
    { name: "You_Clouths E-commerce", mission: t('proj_5_mission'), execution: t('proj_5_execution'), impact: t('proj_5_impact'), tech: ["MERN", "Redux Toolkit", "Web Scraping"], link: "https://github.com/mohamed-ako/you_clouths" }
  ];

  return (
    <div className="relative min-h-screen text-white selection:bg-teal-500/30 overflow-x-hidden font-sans">

      {/* LANGUAGE SWITCHER */}
      <div className="fixed bottom-5 right-5 z-[100] flex gap-2">
        {['en', 'ar', 'fr'].map((lng) => (
          <button 
            key={lng} onClick={() => changeLanguage(lng)}
            className="px-3 py-1 glass-card border border-teal-500/30 rounded uppercase text-xs hover:bg-teal-500 hover:text-black transition"
          >
            {lng}
          </button>
        ))}
      </div>

      {/* 3D DATA GRID BACKGROUND */}
      <div ref={vantaRef} className="fixed inset-0 -z-10" />

      {/* GAME UI LAYER */}
      <AnimatePresence>
        {gameActive && anomalies.map((anomaly) => (
          <motion.div
            key={anomaly.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [1, 1.2, 1], opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => patchAnomaly(anomaly.id)}
            className="fixed z-40 cursor-crosshair text-red-500 hover:text-white hover:bg-red-500 rounded-full p-2 border border-red-500 bg-black/50 backdrop-blur"
            style={{ top: `${anomaly.y}vh`, left: `${anomaly.x}vw` }}
          >
            <Bug size={24} />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* NAVIGATION */}
      <nav className="fixed w-full top-0 z-50 glass-card py-4 px-8 flex justify-between items-center bg-black/40 backdrop-blur-md border-b border-white/5">
        <div className="text-xl font-bold tracking-wider uppercase flex items-center gap-2">
          <Terminal className="text-teal-400" size={20}/>
          M-AKO<span className="text-teal-400">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-teal-400 transition">{t('nav_about')}</a>
          <a href="#experience" className="hover:text-teal-400 transition">{t('nav_experience')}</a>
          <a href="#projects" className="hover:text-teal-400 transition">{t('nav_projects')}</a>
          <a href="#education" className="hover:text-teal-400 transition">{t('nav_education')}</a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20 relative z-10">
        
        {/* HERO SECTION */}
        <motion.section initial="hidden" animate="visible" variants={fadeInUp} className="min-h-[70vh] flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <h2 className="text-teal-400 font-mono tracking-widest text-xs uppercase bg-teal-500/10 w-fit px-3 py-1 rounded-full border border-teal-500/20">
                {t('hero_status')}
              </h2>
              {/* GAME TOGGLE BUTTON */}
              <button 
                onClick={() => setGameActive(!gameActive)}
                className={`text-xs font-mono px-3 py-1 rounded-full border transition ${gameActive ? 'bg-red-500/20 text-red-400 border-red-500/50' : 'bg-gray-800/50 text-gray-400 border-gray-700 hover:text-teal-400 hover:border-teal-400'}`}
              >
                {gameActive ? `[ ${t('game_score')} ${score} ]` : `> ${t('game_init')}`}
              </button>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter">
              MOHAMED <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">AKKOUH</span>
            </h1>
            <p className="text-lg text-gray-400 font-light max-w-md leading-relaxed border-l-2 border-teal-500/50 pl-4">
              {t('hero_subtitle')}
            </p>
            <div className="flex gap-4 pt-4">
              <a href='https://github.com/mohamed-ako' target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-teal-500 text-gray-900 font-bold rounded-lg hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] transition flex items-center gap-2">
                <Terminal size={18} /> {t('hero_cta_github')}
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
          <div className="glass-card rounded-3xl p-10 relative overflow-hidden border border-white/5 bg-black/40 backdrop-blur">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <Shield size={180} />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-teal-400 uppercase tracking-widest">{t('about_title')}</h3>
            <div className="grid md:grid-cols-2 gap-10 text-gray-300 leading-relaxed z-10 relative text-lg">
              <p>{t('about_p1')}</p>
              <p>{t('about_p2')}</p>
            </div>
          </div>
        </motion.section>

        {/* CLASSIFIED OPERATIONS (NEW EXPERIENCE TIMELINE) */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} id="experience" className="py-20">
          <h3 className="text-3xl font-bold mb-10 border-b border-white/10 pb-4 uppercase tracking-widest text-teal-400">
            {t('exp_title')}
          </h3>
          <div className="relative border-l border-teal-500/30 ml-6 space-y-12 pb-8">
            
            {/* Role 1 */}
            <div className="relative pl-10">
              <div className="absolute w-8 h-8 bg-teal-900/50 border border-teal-500 rounded-full -left-[16.5px] top-0 flex items-center justify-center text-teal-400">
                <Shield size={14} />
              </div>
              <h4 className="text-2xl font-bold text-white">{t('exp_role1')}</h4>
              <p className="text-teal-400 font-mono mb-3">{t('exp_loc1')}</p>
              <p className="text-gray-400 leading-relaxed">{t('exp_desc1')}</p>
            </div>

            {/* Role 2 */}
            <div className="relative pl-10">
              <div className="absolute w-8 h-8 bg-gray-800 border border-gray-600 rounded-full -left-[16.5px] top-0 flex items-center justify-center text-gray-400">
                <Code size={14} />
              </div>
              <h4 className="text-2xl font-bold text-white">{t('exp_role2')}</h4>
              <p className="text-gray-400 font-mono mb-3">{t('exp_loc2')}</p>
              <p className="text-gray-400 leading-relaxed">{t('exp_desc2')}</p>
            </div>
          </div>
        </motion.section>

        {/* TECH ARSENAL */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} id="skills" className="py-20">
          <h3 className="text-3xl font-bold mb-10 text-center uppercase tracking-widest">{t('skills_title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-teal-500/30 transition bg-black/30 backdrop-blur">
              <Code className="text-teal-400 mb-4" size={32} />
              <h4 className="text-xl font-bold mb-4">{t('skills_frontend')}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>React.js & React Native</li>
                <li>JavaScript (ES6+)</li>
                <li>Tailwind CSS & Bootstrap</li>
              </ul>
            </div>
            <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-teal-500/30 transition bg-black/30 backdrop-blur">
              <Server className="text-teal-400 mb-4" size={32} />
              <h4 className="text-xl font-bold mb-4">{t('skills_backend')}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Laravel & PHP</li>
                <li>Express.js & Node.js</li>
                <li>Python (Flask / Analytics)</li>
              </ul>
            </div>
            <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-teal-500/30 transition bg-black/30 backdrop-blur">
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

        {/* PROJECTS SECTION (STRUCTURED REFACTOR) */}
        <section id="projects" className="py-20">
          <h3 className="text-3xl font-bold mb-10 border-b border-white/10 pb-4 uppercase tracking-widest text-teal-400">
            {t('projects_title')}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projectData.map((proj, i) => (
              <Tilt key={i} tiltMaxAngleX={3} tiltMaxAngleY={3} glareEnable={true} glareMaxOpacity={0.1}>
                <div className="glass-card rounded-2xl p-8 group border border-white/5 hover:border-teal-500/50 transition-colors h-full bg-black/40 backdrop-blur flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between mb-6">
                      <h4 className="text-2xl font-bold group-hover:text-teal-400 transition">{proj.name}</h4>
                      <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-teal-400 opacity-50 group-hover:opacity-100 transition hover:scale-110">
                        <ExternalLink size={24} />
                      </a>
                    </div>
                    
                    <div className="space-y-4 mb-6 text-sm">
                      <div>
                        <span className="text-teal-500 font-bold block mb-1">{t('lbl_mission')}</span>
                        <p className="text-gray-300">{proj.mission}</p>
                      </div>
                      <div>
                        <span className="text-teal-500 font-bold block mb-1">{t('lbl_execution')}</span>
                        <p className="text-gray-300">{proj.execution}</p>
                      </div>
                      <div className="bg-teal-900/20 border-l-2 border-teal-500 p-3 rounded-r">
                        <span className="text-teal-400 font-bold block mb-1">{t('lbl_impact')}</span>
                        <p className="text-gray-200">{proj.impact}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {proj.tech.map(tech => (
                      <span key={tech} className="text-[10px] font-mono px-2 py-1 bg-black/50 text-teal-300 rounded border border-teal-500/20">{tech}</span>
                    ))}
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </section>

        {/* ACADEMIC JOURNEY */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} id="education" className="py-20">
          <div className="glass-card rounded-3xl p-10 relative overflow-hidden border border-white/5 bg-black/40 backdrop-blur">
            <h3 className="text-3xl font-bold mb-10 text-teal-400 uppercase tracking-widest">{t('edu_title')}</h3>
            <div className="relative border-l border-gray-700 ml-4 space-y-10 pb-4">
              
              <div className="relative pl-8">
                <div className="absolute w-4 h-4 bg-teal-500 rounded-full -left-[8.5px] top-1 shadow-[0_0_10px_#14b8a6]"></div>
                <h4 className="text-xl font-bold">{t('edu_it_degree')}</h4>
                <p className="text-teal-400 text-sm font-mono mb-2">SUPMTI (GPA: 17.36/20 - Très Bien)</p>
                <p className="text-gray-400 text-sm leading-relaxed">{t('edu_it_desc')}</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute w-4 h-4 bg-gray-600 rounded-full -left-[8.5px] top-1"></div>
                <h4 className="text-xl font-bold">{t('edu_tech_degree')}</h4>
                <p className="text-gray-400 text-sm font-mono mb-2">ISTA</p>
                <p className="text-gray-400 text-sm leading-relaxed">{t('edu_tech_desc')}</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute w-4 h-4 bg-gray-600 rounded-full -left-[8.5px] top-1"></div>
                <h4 className="text-xl font-bold">{t('edu_law_degree')}</h4>
                <p className="text-gray-400 text-sm font-mono mb-2">Abdelmalek Essaâdi University</p>
                <p className="text-gray-400 text-sm leading-relaxed">{t('edu_law_desc')}</p>
              </div>
            </div>
          </div>
        </motion.section>

 

{/* CONTACT SECTION */}

<section className="py-20 text-center">
  <div className="inline-block p-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl">
    <div className="glass-card rounded-xl p-12 bg-black/90 backdrop-blur-xl">
      <Mail className="mx-auto text-teal-400 mb-6" size={48} />
      <h3 className="text-4xl font-black mb-4">{t('contact_title')}</h3>
      <p className="text-gray-400 mb-8 max-w-md mx-auto">{t('contact_desc')}</p>
      
      <div className="flex flex-col gap-6 items-center">
        <a href="mailto:mohamedakkouh07@gmail.com" 
           className="px-10 py-4 bg-teal-500 text-black font-bold uppercase tracking-widest rounded hover:bg-teal-400 transition-all flex items-center gap-3">
          <Terminal size={20}/> {t('contact_btn')}
        </a>

        {/* Manual SVG Icons - No Library Required */}
        <div className="flex gap-8 mt-4">
          {/* Instagram */}
          <a href="https://www.instagram.com/mohamed__ako/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-transform hover:scale-125">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          {/* Facebook */}
          <a href="https://www.facebook.com/profile.php?id=100086469501824" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-transform hover:scale-125">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          {/* WhatsApp */}
          <a href="https://wa.me/212625051615" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-transform hover:scale-125">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L22 2l-1.5 6.5Z"></path></svg>
          </a>
        </div>

        <p className="text-xs font-mono text-gray-500 mt-4 uppercase tracking-tighter">
          SECURE CHANNEL: +212 625051615 // AL-HOCEIMA PROVINCE
        </p>
      </div>
    </div>
  </div>
</section>

      </main>
    </div>
  );
}