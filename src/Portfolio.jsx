import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Shield, Server, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa'; // Official GitHub icon
import './styles.css'; // Ensure you have the styles for the glass-card and mesh-bg
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Portfolio() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-teal-500/30">
      <div className="mesh-bg"></div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 glass-card border-b-0 py-4 px-8 flex justify-between items-center">
        <div className="text-xl font-bold tracking-wider">M-AKO<span className="text-teal-400">.</span></div>
        <div className="hidden md:flex gap-6 text-sm text-gray-300">
          <a href="#about" className="hover:text-teal-400 transition">About</a>
          <a href="#skills" className="hover:text-teal-400 transition">Skills</a>
          <a href="#projects" className="hover:text-teal-400 transition">Projects</a>
          <a href="#education" className="hover:text-teal-400 transition">Education</a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        
        {/* HERO SECTION */}
        <motion.section 
          initial="hidden" animate="visible" variants={fadeInUp}
          className="min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between gap-12"
        >
          <div className="flex-1 space-y-6">
            <h2 className="text-teal-400 font-mono tracking-widest text-sm uppercase">System Online // Status: Ready</h2>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Mohamed <br/> AKKOUH
            </h1>
            <p className="text-xl text-gray-400 font-light border-l-2 border-teal-500 pl-4">
              Full-Stack Developer | IT Management Specialist <br/>
              <span className="text-sm">Architecting resilient digital solutions in Al-Hoceima.</span>
            </p>
            <div className="flex gap-4 pt-4">
              <a href='https://github.com/mohamed-ako/Mohamed-AKKOUH' target="_blank" 
                rel="noopener noreferrer" className="px-6 py-3 bg-teal-500/20 text-teal-300 border border-teal-500/50 rounded-lg hover:bg-teal-500 hover:text-gray-900 transition duration-300">
                View My Work
              </a>
       
              <a className="px-6 py-3 glass-card rounded-lg hover:bg-white/10 transition duration-300"
                      
                href="/Mohamed_AKKOUH_CV.pdf" // If it's in your public folder
                target="_blank" 
                rel="noopener noreferrer"
                // className="px-6 py-3 glass-card rounded-lg hover:bg-white/10 transition duration-300 inline-block"
                >
                Download CV
              </a>

              {/* </button> */}
            </div>
          </div>
          
          <div className="flex-1 flex justify-center relative">
            {/* Image Container with Overflow Effect */}
            <div className="relative w-80 h-80 glass-card rounded-2xl flex items-center justify-center overflow-visible group">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
              {/* Replace the src with your actual image path */}
              <img 
                src="/my-profile.png" 
                alt="Mohamed AKKOUH" 
                className="absolute bottom-0 w-68 h-auto rounded-b-2xl object-cover filter grayscale group-hover:grayscale-0 transition duration-500 drop-shadow-2xl translate-y-[-10px]"
              />
            </div>
          </div>
        </motion.section>

        {/* ABOUT / INTELLIGENCE PROFILE */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          id="about" className="py-20"
        >
          <div className="glass-card rounded-3xl p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Shield size={120} />
            </div>
            <h3 className="text-3xl font-bold mb-6">The Intelligence Profile</h3>
            <div className="grid md:grid-cols-2 gap-10 text-gray-300 leading-relaxed z-10 relative">
              <p>
                As an INTJ, I approach development not just as writing code, but as architecting logical, scalable systems. My current role in the <strong>Cellule de Veille</strong> (Proactive Crisis Management) at the Province of Al-Hoceima demands rigorous analytical thinking, high-level security awareness, and rapid problem-solving.
              </p>
              <p>
                What truly sets me apart is my dual background. Alongside my IT expertise, I hold a <strong>Bachelor's degree in Law</strong>. This unique combination allows me to understand both the technical architecture of a project and the legal, bureaucratic, and compliance requirements of modern enterprise administration.
              </p>
            </div>
          </div>
        </motion.section>

        {/* TECH ARSENAL */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          id="skills" className="py-20"
        >
          <h3 className="text-3xl font-bold mb-10 text-center">Tech Arsenal</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-2xl hover:-translate-y-2 transition duration-300">
              <Code className="text-teal-400 mb-4" size={32} />
              <h4 className="text-xl font-bold mb-4">Front-End</h4>
              <ul className="space-y-2 text-gray-400">
                <li>React.js & React Native</li>
                <li>JavaScript (ES6+)</li>
                <li>Tailwind CSS & Bootstrap</li>
              </ul>
            </div>
            <div className="glass-card p-6 rounded-2xl hover:-translate-y-2 transition duration-300">
              <Server className="text-teal-400 mb-4" size={32} />
              <h4 className="text-xl font-bold mb-4">Back-End</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Laravel & PHP</li>
                <li>Express.js & Node.js</li>
                <li>Python (Flask / Data Analytics)</li>
              </ul>
            </div>
            <div className="glass-card p-6 rounded-2xl hover:-translate-y-2 transition duration-300">
              <Database className="text-teal-400 mb-4" size={32} />
              <h4 className="text-xl font-bold mb-4">Data & DevOps</h4>
              <ul className="space-y-2 text-gray-400">
                <li>MongoDB, MySQL, SQLite3</li>
                <li>AWS & Azure Cloud</li>
                <li>Linux & Active Directory</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* FEATURED PROJECTS */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          id="projects" className="py-20"
        >
          <h3 className="text-3xl font-bold mb-10">Classified Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="glass-card rounded-2xl p-6 group">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-2xl font-bold group-hover:text-teal-400 transition">Mini Market Pro</h4>
                <div className="flex gap-2">
                  <FaGithub size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                  <a href='https://github.com/mohamed-ako/mini-market-pro' target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                  </a>
                </div>
              </div>
              <p className="text-gray-400 mb-4">A Progressive Web App (PWA) with real-time Firebase integration and offline capabilities for seamless market management.</p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-teal-300">
                <span className="px-2 py-1 bg-teal-900/30 rounded">React</span>
                <span className="px-2 py-1 bg-teal-900/30 rounded">Vite</span>
                <span className="px-2 py-1 bg-teal-900/30 rounded">Firebase</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="glass-card rounded-2xl p-6 group">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-2xl font-bold group-hover:text-teal-400 transition">Hybrid Movie Recommender</h4>
                <div className="flex gap-2">
                  <FaGithub size={20} className="text-gray-400 hover:text-white cursor-pointer" />

                         <a href='https://github.com/mohamed-ako/Intelligent-Movie-Recommendation-Website' target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                  </a>
                </div>
              </div>
              <p className="text-gray-400 mb-4">An AI/ML-driven recommendation engine using cosine similarity to deliver real-time, personalized content.</p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-teal-300">
                <span className="px-2 py-1 bg-teal-900/30 rounded">Flask</span>
                <span className="px-2 py-1 bg-teal-900/30 rounded">React</span>
                <span className="px-2 py-1 bg-teal-900/30 rounded">MongoDB</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="glass-card rounded-2xl p-6 group">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-2xl font-bold group-hover:text-teal-400 transition">Coffee Shop POS</h4>
                <div className="flex gap-2">
                  <FaGithub size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                         <a href='https://github.com/mohamed-ako/SmartRif-Cafe' target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                  </a>
                </div>
              </div>
              <p className="text-gray-400 mb-4">Point of Sale system featuring real-time sales analytics, secure authentication, and offline-first database management.</p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-teal-300">
                <span className="px-2 py-1 bg-teal-900/30 rounded">MERN</span>
                <span className="px-2 py-1 bg-teal-900/30 rounded">SQLite3</span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="glass-card rounded-2xl p-6 group">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-2xl font-bold group-hover:text-teal-400 transition">Real Estate Platform</h4>
                <div className="flex gap-2">
                  <FaGithub size={20} className="text-gray-400 hover:text-white cursor-pointer" />

                         <a href='https://github.com/mohamed-ako/darek_v2' target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                  </a>
                </div>
              </div>
              <p className="text-gray-400 mb-4">Full-stack property platform for renting and buying with advanced filtering and administrative dashboard.</p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-teal-300">
                <span className="px-2 py-1 bg-teal-900/30 rounded">Laravel</span>
                <span className="px-2 py-1 bg-teal-900/30 rounded">React</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ACADEMIC JOURNEY */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          id="education" className="py-20"
        >
          <h3 className="text-3xl font-bold mb-10">Academic Journey</h3>
          <div className="relative border-l border-gray-700 ml-4 space-y-10 pb-8">
            
            <div className="relative pl-8">
              <div className="absolute w-4 h-4 bg-teal-500 rounded-full -left-[8.5px] top-1 shadow-[0_0_10px_#14b8a6]"></div>
              <h4 className="text-xl font-bold">Bachelor's in Information Technology</h4>
              <p className="text-teal-400 text-sm font-mono mb-2">SUPMTI (GPA: 17.36/20 - Très Bien)</p>
              <p className="text-gray-400 text-sm">Focus on Software Engineering, DB Administration (PL/SQL), TCP/IP Network Programming, and Object-Oriented Development.</p>
            </div>

            <div className="relative pl-8">
              <div className="absolute w-4 h-4 bg-gray-600 rounded-full -left-[8.5px] top-1"></div>
              <h4 className="text-xl font-bold">Specialized Technician in Digital Development</h4>
              <p className="text-gray-400 text-sm font-mono mb-2">ISTA</p>
              <p className="text-gray-400 text-sm">Intensive practical training in Front-end/Back-end development, Agile approaches, Cloud-native applications, and IS Security.</p>
            </div>

            <div className="relative pl-8">
              <div className="absolute w-4 h-4 bg-gray-600 rounded-full -left-[8.5px] top-1"></div>
              <h4 className="text-xl font-bold">Bachelor's in Law</h4>
              <p className="text-gray-400 text-sm font-mono mb-2">Abdelmalek Essaâdi University</p>
              <p className="text-gray-400 text-sm">Foundational legal training providing a strict analytical framework and deep understanding of administrative bureaucracy.</p>
            </div>

          </div>
        </motion.section>

      </main>
    </div>
  );
}