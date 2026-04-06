import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          nav_about: "About",
          nav_skills: "Skills",
          nav_projects: "Projects",
            nav_education: "Education",
          hero_status: "System Online // Status: Ready",
          hero_subtitle: "Full-Stack Developer | Intelligence & Crisis Management",
          hero_cta_github: "View Terminal",
          hero_cta_cv: "Download Dossier",
          about_title: "The Intelligence Profile",
          about_p1: "As an INTJ, I approach development as the architecture of logical, scalable systems. My current role in the Cellule de Veille at the Province of Al-Hoceima demands rigorous analytical thinking.",
          about_p2: "What truly sets me apart is my Bachelor's degree in Law alongside my IT expertise, allowing me to navigate both technical and administrative requirements.",
          skills_title: "Tech Arsenal",
          skills_frontend: "Front-End",
          skills_backend: "Back-End",
          skills_data: "Data & DevOps",
          projects_title: "Classified Projects",
          proj_1_desc: "PWA with real-time Firebase integration and offline capability.",
          proj_2_desc: "AI-driven engine using cosine similarity for real-time personalization.",
          proj_3_desc: "Sales analytics system with secure authentication and offline-first DB.",
          proj_4_desc: "Full-stack property platform with administrative dashboard.",
          dir: "ltr",
          edu_title: "Academic Journey",
edu_it_degree: "Bachelor's in Information Technology",
edu_it_desc: "Focus on Software Engineering, DB Administration (PL/SQL), TCP/IP Network Programming, and Object-Oriented Development.",
edu_tech_degree: "Specialized Technician in Digital Development",
edu_tech_desc: "Intensive practical training in Front-end/Back-end development, Agile approaches, and IS Security.",
edu_law_degree: "Bachelor's in Law",
edu_law_desc: "Foundational legal training providing a strict analytical framework and understanding of bureaucracy.",
        }
      },
      fr: {
        translation: {
          nav_about: "À Propos",
          nav_skills: "Compétences",
          nav_projects: "Projets",
          nav_education: "Éducation",
          hero_status: "Système en Ligne // État : Prêt",
          hero_subtitle: "Développeur Full-Stack | Intelligence et Gestion de Crise",
          hero_cta_github: "Voir Terminal",
          hero_cta_cv: "Télécharger Dossier",
          about_title: "Le Profil d'Intelligence",
          about_p1: "En tant qu'INTJ, j'aborde le développement comme l'architecture de systèmes logiques et évolutifs. Mon rôle actuel à la Province d'Al-Hoceima exige une pensée analytique rigoureuse.",
          about_p2: "Ce qui me distingue vraiment, c'est ma licence en droit parallèlement à mon expertise en informatique, me permettant de naviguer entre exigences techniques et administratives.",
          skills_title: "Arsenal Technique",
          skills_frontend: "Front-End",
          skills_backend: "Back-End",
          skills_data: "Données et DevOps",
          projects_title: "Projets Classifiés",
          proj_1_desc: "PWA avec intégration Firebase en temps réel et capacité hors ligne.",
          proj_2_desc: "Moteur IA utilisant la similarité cosinus pour une personnalisation en temps réel.",
          proj_3_desc: "Système d'analyse des ventes avec authentification sécurisée.",
          proj_4_desc: "Plateforme immobilière complète avec tableau de bord administratif.",
          dir: "ltr",
          edu_title: "Parcours Académique",
edu_it_degree: "Licence en Informatique",
edu_it_desc: "Spécialisation en génie logiciel, administration de bases de données (PL/SQL) et réseaux TCP/IP.",
edu_tech_degree: "Technicien Spécialisé en Développement Digital",
edu_tech_desc: "Formation pratique intensive en développement Front-end/Back-end et approches Agiles.",
edu_law_degree: "Licence en Droit",
edu_law_desc: "Formation juridique fondamentale offrant un cadre analytique strict et une compréhension de la bureaucratie.",
        }
      },
      ar: {
        translation: {
          nav_about: "حول",
          nav_skills: "المهارات",
          nav_projects: "المشاريع",
          nav_education: "التعليم",
          hero_status: "النظام متصل // الحالة: جاهز",
          hero_subtitle: "مطور ويب شامل | متخصص في الذكاء وإدارة الأزمات",
          hero_cta_github: "عرض البرمجيات",
          hero_cta_cv: "تحميل الملف",
          about_title: "ملف الذكاء",
          about_p1: "بصفتي INTJ، أتعامل مع التطوير كبناء لأنظمة منطقية وقابلة للتوسع. عملي الحالي في خلية اليقظة بإقليم الحسيمة يتطلب تفكيرًا تحليليًا صارمًا.",
          about_p2: "ما يميزني حقًا هو حصولي على إجازة في القانون إلى جانب خبرتي في تكنولوجيا المعلومات، مما يسمح لي بفهم المتطلبات التقنية والإدارية معًا.",
          skills_title: "الترسانة التقنية",
          skills_frontend: "واجهة المستخدم",
          skills_backend: "الأنظمة الخلفية",
          skills_data: "البيانات والعمليات",
          projects_title: "مشاريع مصنفة",
          proj_1_desc: "تطبيق ويب متطور مع تكامل Firebase وقدرة العمل بدون إنترنت.",
          proj_2_desc: "محرك ذكاء اصطناعي يعتمد على تشابه جيب التمام للتخصيص الفوري.",
          proj_3_desc: "نظام تحليل المبيعات مع مصادقة آمنة وقاعدة بيانات محلية.",
          proj_4_desc: "منصة عقارية متكاملة مع لوحة تحكم إدارية.",
          dir: "rtl",
          edu_title: "المسار الأكاديمي",
edu_it_degree: "إجازة في تكنولوجيا المعلومات",
edu_it_desc: "التركيز على هندسة البرمجيات، إدارة قواعد البيانات (PL/SQL)، وبرمجة الشبكات.",
edu_tech_degree: "تقني متخصص في التطوير الرقمي",
edu_tech_desc: "تدريب عملي مكثف في تطوير الواجهات الأمامية والخلفية والمنهجيات الرشيقة.",
edu_law_degree: "إجازة في القانون",
edu_law_desc: "تكوين قانوني أساسي يوفر إطاراً تحليلياً صارماً وفهماً عميقاً للمساطر الإدارية."
        }
      }
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;