    // Tailwind script config
    function initTailwind() {
      document.documentElement.style.setProperty('--accent', '#1e40af');
    }

    // Content — English (default) + Spanish
    const i18n = {
      en: {
        nav: {
          about: "About",
          experience: "Experience",
          projects: "Projects",
          skills: "Skills",
          testimonials: "Testimonials",
          contact: "Contact",
          download: "View CV (English)"
        },
        hero: {
          greeting: "Hello, I'm",
          name: "Daniel Pérez Álvarez",
          headline: "Engineering Manager | Building and Scaling engineering teams",
          tagline: "Results-driven leader with 15+ years of software engineering experience and 8+ years managing teams. Expert in building scalable systems, modernizing legacy to microservices, AI-powered development, and driving compliance in regulated environments.",
          cta1: "Get in touch",
          cta2: "View my work",
          cta3: "View CV (English)",
          location: "Madrid, Spain",
          available: "Open to opportunities"
        },
        about: {
          title: "About Me",
          body: "Results-driven Engineering Manager with 15+ years of software engineering experience and 8+ years managing multidisciplinary, distributed engineering teams. Expert in bridging technical architecture and product delivery, modernizing legacy systems to microservices, AI-powered development, and ensuring compliance with PCI-DSS and PSD2 regulations. Proven track record in Agile methodology, team hiring and development, performance optimization, and high-throughput transaction systems. Passionate about clean code, maintainable design, and productive engineering practices.",
          stat: {
            years: "Years managing engineering teams",
            team: "Engineers scaled in a single organization",
            tx: "Transactions categorized daily",
            rps: "Requests per second sustained"
          },
          personal: "Outside of work, I'm a father of two and value spending quality time with my family. It helps me stay grounded and brings valuable perspective to my leadership."
        },
        experience: {
          title: "Professional Experience",
          leadershipTitle: "Technical Leadership",
          icTitle: "Software Development – Individual Contributor",
          icHighlight: "15 years of hands-on software development experience",
          note: "Earlier roles (2004–2017) — Foundation of 15 years in software development: Technical Project Lead at Valassis, Technical Leader at gameandbeers.com, Senior Software Engineer/Project Lead at Buongiorno MyAlert (mobile platform serving ~80 countries), and software engineering positions at Fullsix, IT Deusto / Oesia, Assertum and O.C.U."
        },
        leadershipItems: [
          {
            role: "Engineering Manager",
            company: "Payxpert — Payment solutions for businesses",
            period: "April 2024 – Present",
            bullets: [
              "Lead two engineering teams (7 engineers: 2 Junior Java, 2 Senior Java, 2 Senior PHP, 1 Tech Lead), 1 QA and 1 Product Manager maintaining and evolving a high-availability payments API platform in a highly regulated environment (full PCI-DSS compliance), in close collaboration with Product and stakeholders.",
              "Spearheading the migration of a monolithic Central Backoffice (merchant admin, reporting, billing) to modern microservices using Spring Boot, Kotlin, GraphQL and event-driven architecture while managing remote, multidisciplinary and multicultural teams.",
              "Established mature Agile workflows, defined performance KPIs, prioritized backlog with Product, conducted hiring and created individual career growth plans for the team."
            ]
          },
          {
            role: "Engineering Manager – Categorization & Data Business Unit",
            company: "Qwist — Leading technology and solution provider for Open Finance",
            period: "July 2021 – March 2024",
            bullets: [
              "Led the technical design, evolution and delivery of a transaction data categorization and enrichment system (rules + ML models) processing 7 million transactions daily at 3.5K requests/second via REST APIs in highly regulated financial environments (PCI-DSS and PSD2).",
              "Managed cross-functional, multicultural and multidisciplinary remote team of 9 (engineers, Tech Lead, Data Scientist, 3 Data Quality specialists, PM), working in close partnership with Product and stakeholders on prioritization and roadmaps. Personally hired 4 engineers.",
              "Built high-performance backend with Spring Boot + Async & parallel programming and integrated Python-based ML models.",
              "Deployed and monitored on Google Cloud Platform (Kubernetes, MongoDB Atlas, Kibana, APM) while adapting to different organizational maturity levels."
            ]
          },
          {
            role: "CTO",
            company: "MyValue Solutions — PSD2 TSP & Financial Data Provider",
            period: "March 2019 – July 2021",
            bullets: [
              "Defined strategic technology roadmap in close collaboration with Product and business stakeholders, scaling a multicultural, multidisciplinary remote team from 6 to 23 members in a high-growth startup, establishing processes that led to successful acquisition by Qwist.",
              "Delivered PSD2 AIS APIs, data categorization and payments services in highly regulated environments (full PCI-DSS and bank audit compliance).",
              "Led company through successful acquisition and technology integration with Qwist."
            ]
          }
        ],
        icItems: [
          {
            role: "Senior Software Engineer",
            company: "b-fy (formerly Biocryptology)",
            period: "October 2017 – March 2019",
            bullets: [
              "Contributed to architecture and development of microservices for biometric identification and access management in a multidisciplinary, international team within a regulated environment."
            ]
          }
        ],
        projects: {
          title: "Key Projects & Impact",
          subtitle: "Selected initiatives where I drove technical strategy, scaled teams and delivered measurable business results."
        },
        projectsItems: [
          {
            title: "High-Throughput Transaction Categorization Platform",
            context: "Qwist • 2021–2024",
            impact: "Designed and delivered a rules + ML categorization system serving 7M transactions/day at 3.5K req/s with low latency. Enabled enriched financial data products for banking clients across Europe.",
            tech: "Spring Boot, Async & parallel programming, Python ML, Kubernetes (GCP), MongoDB Atlas, Kibana",
            result: "Production system processing millions of financial transactions daily with full PCI-DSS & PSD2 compliance"
          },
          {
            title: "Central Backoffice Modernization",
            context: "Payxpert • 2024–Present",
            impact: "Leading the replacement of a legacy monolithic merchant/internal admin platform with a modern microservices architecture (Spring Boot + Kotlin + GraphQL + events).",
            tech: "Spring Boot, Kotlin, GraphQL, Event-Driven, Kubernetes, PCI-DSS",
            result: "Improved maintainability, scalability and time-to-market for payments features across online, POS and in-app channels"
          },
          {
            title: "Engineering Organization Scale-Up & Acquisition",
            context: "MyValue Solutions • 2019–2021",
            impact: "Grew engineering from 6 to 23 people, introduced Scrum and professional SDLC practices, strengthened compliance posture (PCI-DSS). Key technical contributor to the successful acquisition by Qwist.",
            tech: "PSD2 AIS/PIS APIs, Data Categorization, Payments infrastructure, Compliance",
            result: "Company acquired by Qwist — successful technical due diligence and integration"
          }
        ],
        skills: {
          title: "Skills & Expertise",
          categories: [
            {
              name: "Leadership & Management",
              items: ["Engineering team performance", "Team & stakeholder management", "Hiring & mentoring", "Career development", "Roadmapping & prioritization", "Agile (Scrum, Kanban)"]
            },
            {
              name: "Architecture & Backend",
              items: ["Microservices architecture", "Event-driven & async systems", "APIs & GraphQL", "Spring Boot", "Async & parallel programming", "Java & Kotlin"]
            },
            {
              name: "AI & Agentic Development",
              items: ["Agentic coding", "Claude Code", "Grok Build", "Microsoft Copilot"]
            },
            {
              name: "Cloud, Data & DevOps",
              items: ["Google Cloud Platform (GCP)", "Kubernetes (CKAD)", "MongoDB Atlas", "PostgreSQL", "ELK / Observability", "CI/CD & monitoring"]
            },
            {
              name: "Fintech & Compliance",
              items: ["PCI-DSS", "PSD2", "Payments", "Rule based engines", "Data Encryption", "Security Best Practices"]
            },
            {
              name: "Languages & Tools",
              items: ["Java", "Kotlin", "Python", "Bash scripting", "Spring Boot", "GraphQL", "REST APIs"]
            }
          ]
        },
        testimonials: {
          title: "Recommendations",
          subtitle: "What leaders I've worked with say",
          note: "View the full signed letters (with signatures) from the links in each recommendation."
        },
        testimonialsItems: [
          {
            quote: "Daniel quickly established structured engineering teams, implemented Agile methodologies, and introduced professional delivery practices. Under his leadership we scaled the engineering organization from 6 to 23 members. He was instrumental in positioning MyValue for acquisition and led the technical integration efforts with Qwist. Daniel is a mature, results-oriented engineering leader who combines strong technical credibility with excellent people leadership.",
            name: "Andrés Romerales Cidoncha",
            role: "CEO & Founder",
            company: "MyValue Solutions",
            fullLetter: "./assets/MyValue_Reference_Letter.pdf",
            downloadLabel: "View full signed letter (PDF)"
          },
          {
            quote: "Mr. Pérez Álvarez impressed us with his significant expertise. Engineers reported the most positive work environments and relationships during their tenure. He contributed significantly to integrating MyValue’s products into Qwist’s ecosystem and facilitating communication with Spanish clients. As a manager he continually demonstrated his great integration abilities, creating an outstanding working atmosphere in his team. His behaviour was always exemplary and he showed great dedication under pressure.",
            name: "Carlos Gomez & Dennis Lutter",
            role: "Managing Director Qwist Iberia SL & VP of Engineering",
            company: "Qwist",
            fullLetter: "./assets/Qwist_Reference_Letter.pdf",
            downloadLabel: "View full signed letter (PDF)"
          }
        ],
        education: {
          title: "Education",
          degree: "Computer Science Engineering"
        },
        certs: {
          title: "Certifications & Professional Development",
          ckad: "CKAD — Certified Kubernetes Application Developer (2025)",
          webflux: "Spring WebFlux Development (Udemy, 2023)",
          english: "Native-level English (written & spoken) — 6th grade completed in the USA",
          agile: "Scrum & Agile Methodologies • Groovy & Grails • Refactoring & JUnit • Liferay • Maven & CI"
        },
        contact: {
          title: "Let's Connect",
          subtitle: "I'm open to Engineering Manager, Head of Engineering, and senior technical leadership roles. I bring a strong focus on ownership, trust, reliability, and engineering excellence when building scalable software solutions across industries.",
          copy: "Copy email address",
          form_title: "Send a quick message",
          send: "Send message",
          form_note: "Opens your email client with a pre-filled message.",
          hiring_note_title: "Building software solutions for your business",
          hiring_note_body: "I'm available to collaborate with companies to design and build custom software solutions, leveraging modern AI tools (agentic coding, automation) to deliver high-impact results tailored to your needs."
        }
      },
      es: {
        nav: {
          about: "Sobre mí",
          experience: "Experiencia",
          projects: "Proyectos",
          skills: "Habilidades",
          testimonials: "Recomendaciones",
          contact: "Contacto",
          download: "Ver CV (Inglés)"
        },
        hero: {
          greeting: "Hola, soy",
          name: "Daniel Pérez Álvarez",
          headline: "Engineering Manager | Construyendo y escalando equipos de ingeniería",
          tagline: "Líder orientado a resultados con más de 15 años de experiencia en ingeniería de software y 8+ años gestionando equipos. Experto en construir sistemas escalables, modernizar legacy a microservicios, desarrollo con IA y garantizar el cumplimiento en entornos regulados.",
          cta1: "Ponte en contacto",
          cta2: "Ver mi trabajo",
          cta3: "Ver CV (Inglés)",
          location: "Madrid, España",
          available: "Abierto a oportunidades"
        },
        about: {
          title: "Sobre mí",
          body: "Engineering Manager orientado a resultados con más de 15 años de experiencia en ingeniería de software y 8+ años gestionando equipos multidisciplinares y distribuidos. Experto en conectar la arquitectura técnica con la entrega de producto, modernizando sistemas legacy hacia microservicios, desarrollo con IA y garantizando el cumplimiento con PCI-DSS y PSD2. Historial probado en metodologías Ágiles, contratación y desarrollo de equipos, optimización de rendimiento y sistemas de alto volumen. Apasionado por el código limpio, el diseño mantenible y las prácticas productivas de ingeniería.",
          stat: {
            years: "Años gestionando equipos de ingeniería",
            team: "Ingenieros escalados en una sola organización",
            tx: "Transacciones categorizadas diariamente",
            rps: "Peticiones por segundo sostenidas"
          },
          personal: "Fuera del trabajo, soy padre de dos hijos y valoro pasar tiempo de calidad con mi familia. Me ayuda a mantener el equilibrio y aporta una perspectiva valiosa a mi liderazgo."
        },
        experience: {
          title: "Experiencia Profesional",
          leadershipTitle: "Liderazgo Técnico",
          icTitle: "Desarrollo de Software – Individual Contributor",
          icHighlight: "15 años de experiencia en desarrollo de software",
          note: "Roles anteriores (2004–2017) — Base de 15 años de experiencia en desarrollo de software: Technical Project Lead en Valassis, Technical Leader en gameandbeers.com, Senior Software Engineer y Project Lead en Buongiorno MyAlert (plataforma móvil para ~80 países), e ingeniería de software en Fullsix, IT Deusto / Oesia, Assertum y O.C.U."
        },
        leadershipItems: [
          {
            role: "Engineering Manager",
            company: "Payxpert — Soluciones de pago para empresas",
            period: "Abril 2024 – Actualidad",
            bullets: [
              "Lidero dos equipos de ingeniería (7 ingenieros: 2 Java Junior, 2 Java Senior, 2 PHP Senior, 1 Tech Lead), 1 QA y 1 Product Manager para mantener y evolucionar una plataforma de pagos de alta disponibilidad en un entorno altamente regulado (cumplimiento total PCI-DSS), en estrecha colaboración con el equipo de Producto y stakeholders.",
              "Encabezo la migración del Backoffice Central monolítico hacia una arquitectura moderna de microservicios usando Spring Boot, Kotlin, GraphQL y diseño orientado a eventos, gestionando equipos remotos, multidisciplinares y multiculturales.",
              "Establecí flujos de trabajo Ágiles maduros, definí KPIs de rendimiento, prioricé backlog con Producto, realicé contrataciones y creé planes de crecimiento individual para los miembros del equipo."
            ]
          },
          {
            role: "Engineering Manager – Unidad de Negocio de Categorización y Datos",
            company: "Qwist — Líder en tecnología y proveedor de soluciones para Open Finance",
            period: "Julio 2021 – Marzo 2024",
            bullets: [
              "Lideré el diseño técnico, evolución y entrega de un sistema de categorización y enriquecimiento de transacciones (reglas + modelos ML) que procesa 7 millones de transacciones diarias a 3.5K peticiones/segundo en entornos financieros altamente regulados (PCI-DSS y PSD2).",
              "Gestioné un equipo remoto, multicultural y multidisciplinar de 9 personas (ingenieros, Tech Lead, Data Scientist, especialistas en calidad de datos y PM), colaborando estrechamente con Producto y stakeholders en priorización y roadmaps. Contraté personalmente a 4 ingenieros.",
              "Construí un backend de alto rendimiento con Spring Boot + Async & parallel programming e integré modelos de ML en Python.",
              "Desplegué y monitoricé en Google Cloud Platform (Kubernetes, MongoDB Atlas, Kibana, APM) adaptándome a diferentes niveles de madurez organizacional."
            ]
          },
          {
            role: "CTO",
            company: "MyValue Solutions — Proveedor de Datos Financieros y TSP PSD2",
            period: "Marzo 2019 – Julio 2021",
            bullets: [
              "Definí la hoja de ruta tecnológica estratégica en estrecha colaboración con el equipo de Producto y stakeholders de negocio, escalando un equipo multicultural y multidisciplinar remoto de 6 a 23 personas en una startup de alto crecimiento, estableciendo procesos que culminaron en la adquisición exitosa por Qwist.",
              "Entregué APIs AIS PSD2, categorización de datos y servicios de pagos en entornos altamente regulados (cumplimiento total PCI-DSS y auditorías bancarias).",
              "Lideró la compañía en la adquisición exitosa y la integración tecnológica con Qwist."
            ]
          }
        ],
        icItems: [
          {
            role: "Senior Software Engineer",
            company: "b-fy (formerly Biocryptology)",
            period: "Octubre 2017 – Marzo 2019",
            bullets: [
              "Contribuí a la arquitectura y desarrollo de microservicios para identificación biométrica y gestión de accesos en un equipo multidisciplinar e internacional dentro de un entorno regulado."
            ]
          }
        ],
        projects: {
          title: "Proyectos Clave e Impacto",
          subtitle: "Iniciativas seleccionadas donde lideré la estrategia técnica, escalé equipos y entregué resultados medibles de negocio."
        },
        projectsItems: [
          {
            title: "Plataforma de Categorización de Transacciones de Alto Volumen",
            context: "Qwist • 2021–2024",
            impact: "Diseñé y entregué un sistema de categorización basado en reglas + ML que procesa 7 millones de transacciones al día a 3.5K req/s. Habilitó productos de datos financieros enriquecidos para clientes bancarios en Europa.",
            tech: "Spring Boot, Async & parallel programming, Python ML, Kubernetes (GCP), MongoDB Atlas, Kibana",
            result: "Sistema en producción que procesa millones de transacciones financieras diarias con cumplimiento PCI-DSS y PSD2"
          },
          {
            title: "Modernización del Backoffice Central",
            context: "Payxpert • 2024–Actualidad",
            impact: "Liderando la sustitución de una plataforma monolítica legacy de administración de comercios e internos por una arquitectura moderna de microservicios (Spring Boot + Kotlin + GraphQL + eventos).",
            tech: "Spring Boot, Kotlin, GraphQL, Event-Driven, Kubernetes, PCI-DSS",
            result: "Mejora en mantenibilidad, escalabilidad y time-to-market de funcionalidades de pago en canales online, TPV y app"
          },
          {
            title: "Escalado de la Organización de Ingeniería y Adquisición",
            context: "MyValue Solutions • 2019–2021",
            impact: "Crecí el equipo de ingeniería de 6 a 23 personas, introduje Scrum y prácticas profesionales de SDLC y reforcé la postura de cumplimiento (PCI-DSS). Contribuí decisivamente a la adquisición exitosa por Qwist.",
            tech: "APIs PSD2 AIS/PIS, Categorización de datos, Infraestructura de pagos, Cumplimiento",
            result: "Compañía adquirida por Qwist — due diligence técnico y proceso de integración exitoso"
          }
        ],
        skills: {
          title: "Habilidades y Experiencia",
          categories: [
            {
              name: "Liderazgo y Gestión",
              items: ["Rendimiento de equipos de ingeniería", "Gestión de equipos y stakeholders", "Contratación y mentoring", "Desarrollo de carrera", "Roadmap y priorización", "Ágil (Scrum, Kanban)"]
            },
            {
              name: "Arquitectura y Backend",
              items: ["Arquitectura de microservicios", "Sistemas event-driven y asíncronos", "APIs y GraphQL", "Spring Boot", "Async & parallel programming", "Java y Kotlin"]
            },
            {
              name: "Desarrollo con IA y Agentes",
              items: ["Desarrollo agentic", "Claude Code", "Grok Build", "Microsoft Copilot"]
            },
            {
              name: "Cloud, Datos y DevOps",
              items: ["Google Cloud Platform (GCP)", "Kubernetes (CKAD)", "MongoDB Atlas", "PostgreSQL", "ELK / Observabilidad", "CI/CD y monitorización"]
            },
            {
              name: "Fintech y Cumplimiento",
              items: ["PCI-DSS", "PSD2", "Payments", "Cifrado y seguridad de datos", "Enriquecimiento de datos transaccionales", "Integración de modelos ML", "Rule based engines"]
            },
            {
              name: "Lenguajes y Herramientas",
              items: ["Java", "Kotlin", "Python", "Python (ML)", "Bash scripting", "Ecosistema Spring", "GraphQL", "REST APIs"]
            }
          ]
        },
        testimonials: {
          title: "Recomendaciones",
          subtitle: "Lo que dicen los líderes con los que he trabajado",
          note: "Ver las cartas completas firmadas desde los enlaces de cada recomendación."
        },
        testimonialsItems: [
          {
            quote: "Daniel estableció rápidamente equipos de ingeniería estructurados, implementó metodologías Ágiles e introdujo prácticas profesionales de entrega. Bajo su liderazgo escalamos la organización de ingeniería de 6 a 23 miembros. Fue clave para posicionar a MyValue para su adquisición y lideró los esfuerzos de integración técnica con Qwist. Daniel es un líder de ingeniería maduro y orientado a resultados que combina gran credibilidad técnica con un excelente liderazgo de personas.",
            name: "Andrés Romerales Cidoncha",
            role: "CEO & Fundador",
            company: "MyValue Solutions",
            fullLetter: "./assets/MyValue_Reference_Letter.pdf",
            downloadLabel: "Ver carta completa firmada (PDF)"
          },
          {
            quote: "Daniel nos impresionó con su gran experiencia. Los ingenieros reportaron los entornos de trabajo más positivos y las mejores relaciones durante su etapa. Contribuyó significativamente a la integración de los productos de MyValue en el ecosistema de Qwist y facilitó la comunicación con clientes españoles. Como manager demostró continuamente sus grandes habilidades de integración, creando un ambiente de trabajo excelente en su equipo. Su comportamiento fue siempre ejemplar y mostró gran dedicación bajo presión.",
            name: "Carlos Gomez & Dennis Lutter",
            role: "Managing Director Qwist Iberia SL & VP of Engineering",
            company: "Qwist",
            fullLetter: "./assets/Qwist_Reference_Letter.pdf",
            downloadLabel: "Ver carta completa firmada (PDF)"
          }
        ],
        education: {
          title: "Formación",
          degree: "Ingeniería en Informática"
        },
        certs: {
          title: "Certificaciones y Desarrollo Profesional",
          ckad: "CKAD — Certified Kubernetes Application Developer (2025)",
          webflux: "Desarrollo con Spring WebFlux (Udemy, 2023)",
          english: "Inglés a nivel nativo (escrito y hablado) — cursé 6º de primaria en EE.UU.",
          agile: "Scrum y Metodologías Ágiles • Groovy & Grails • Refactorización y JUnit • Liferay • Maven e Integración Continua"
        },
        contact: {
          title: "Conectemos",
          subtitle: "Estoy abierto a posiciones de Engineering Manager, Head of Engineering y liderazgo técnico senior. Valoro el ownership, la confianza, la fiabilidad y la excelencia en ingeniería al construir soluciones de software escalables en diferentes industrias.",
          copy: "Copiar dirección de email",
          form_title: "Envía un mensaje rápido",
          send: "Enviar mensaje",
          form_note: "Abre tu cliente de correo con un mensaje pre-rellenado.",
          hiring_note_title: "Construyendo soluciones de software para tu negocio",
          hiring_note_body: "Estoy disponible para colaborar con empresas en el diseño y desarrollo de soluciones de software a medida, aprovechando herramientas de IA modernas (desarrollo agentic, automatización) para entregar resultados de alto impacto adaptados a tus necesidades."
        }
      }
    };

    let currentLang = 'en';

    function getNested(obj, path) {
      return path.split('.').reduce((o, k) => (o || {})[k], obj);
    }

    function updateStaticText(lang) {
      const data = i18n[lang];
      
      // Update all data-i18n elements
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = getNested(data, key);
        if (value) {
          if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = value;
          } else {
            el.textContent = value;
          }
        }
      });

      // Update language buttons active state
      document.getElementById('lang-en').classList.toggle('active', lang === 'en');
      document.getElementById('lang-en').classList.toggle('bg-slate-900', lang === 'en');
      document.getElementById('lang-en').classList.toggle('text-white', lang === 'en');
      document.getElementById('lang-es').classList.toggle('active', lang === 'es');
      document.getElementById('lang-es').classList.toggle('bg-slate-900', lang === 'es');
      document.getElementById('lang-es').classList.toggle('text-white', lang === 'es');
    }

    function renderExperience(lang) {
      const data = i18n[lang];
      renderExperienceList('leadership-list', data.leadershipItems || []);
      renderExperienceList('ic-list', data.icItems || []);
    }

    function renderExperienceList(containerId, items) {
      const container = document.getElementById(containerId);
      if (!container) return;
      
      container.innerHTML = items.map(item => `
        <div class="experience-card bg-white border border-slate-200 rounded-3xl p-7 hover:border-slate-300">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-y-1 mb-3">
            <div>
              <div class="font-semibold text-xl text-slate-900">${item.role}</div>
              <div class="text-blue-700 font-medium">${item.company}</div>
            </div>
            <div class="text-sm text-slate-500 font-medium whitespace-nowrap md:text-right">${item.period}</div>
          </div>
          <ul class="space-y-2.5 pl-1 text-[14.5px] text-slate-600">
            ${item.bullets.map(b => `<li class="flex gap-2.5 leading-snug"><span class="mt-[7px] inline-block w-1 h-1 bg-blue-600 rounded-full flex-shrink-0"></span><span>${b}</span></li>`).join('')}
          </ul>
        </div>
      `).join('');
    }

    function renderProjects(lang) {
      const container = document.getElementById('projects-list');
      const items = i18n[lang].projectsItems;
      
      container.innerHTML = items.map(item => `
        <div class="project-card bg-white border border-slate-200 rounded-3xl p-6 flex flex-col">
          <div class="flex-1">
            <div class="font-semibold text-xl leading-tight text-slate-900">${item.title}</div>
            <div class="text-sm text-blue-700 font-medium mt-0.5">${item.context}</div>
            
            <div class="mt-4 text-[14.2px] leading-relaxed text-slate-600">
              ${item.impact}
            </div>
            
            <div class="mt-4 flex flex-wrap gap-1.5">
              ${item.tech.split(', ').map(t => `<span class="skill-tag text-xs px-3 py-0.5 bg-slate-100 text-slate-600 rounded-xl font-medium">${t}</span>`).join('')}
            </div>
          </div>
          
          <div class="mt-5 pt-4 border-t border-slate-100 text-xs uppercase tracking-wider text-emerald-600 font-semibold">
            ${item.result}
          </div>
        </div>
      `).join('');
    }

    function renderSkills(lang) {
      const container = document.getElementById('skills-list');
      const cats = i18n[lang].skills.categories;
      
      container.innerHTML = cats.map(cat => `
        <div class="bg-white border border-slate-200 rounded-3xl p-6">
          <div class="font-semibold text-base mb-3 text-slate-800">${cat.name}</div>
          <div class="flex flex-wrap gap-2">
            ${cat.items.map(skill => `
              <span class="skill-tag inline-block text-sm px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl font-medium">${skill}</span>
            `).join('')}
          </div>
        </div>
      `).join('');
    }

    function renderTestimonials(lang) {
      const container = document.getElementById('testimonials-list');
      const items = i18n[lang].testimonialsItems;
      
      container.innerHTML = items.map(item => {
        const initials = (item.name || '').replace(/&/g, ' ').trim().split(/\s+/).map(w => w[0]).join('').toUpperCase().slice(0, 2) || 'DP';
        const downloadLink = item.fullLetter ? `
          <a href="${item.fullLetter}" target="_blank" rel="noopener noreferrer"
             class="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-blue-700 hover:text-blue-800 pt-3 border-t border-slate-100">
            <i class="fa-solid fa-eye"></i>
            <span>${item.downloadLabel || 'View full signed letter (PDF)'}</span>
          </a>` : '';
        return `
        <div class="bg-white border border-slate-200 rounded-3xl p-7">
          <div class="quote text-slate-600">
            “${item.quote}”
          </div>
          <div class="mt-6 flex items-center gap-3">
            <div class="w-9 h-9 bg-slate-900 text-white flex items-center justify-center rounded-2xl text-sm font-semibold flex-shrink-0">${initials}</div>
            <div>
              <div class="font-semibold">${item.name}</div>
              <div class="text-sm text-slate-500">${item.role} — ${item.company}</div>
            </div>
          </div>
          ${downloadLink}
        </div>
      `}).join('');
    }

    function renderAll(lang) {
      updateStaticText(lang);
      renderExperience(lang);
      renderProjects(lang);
      renderSkills(lang);
      renderTestimonials(lang);
    }

    function setLanguage(lang) {
      currentLang = lang;
      document.documentElement.lang = (lang === 'es') ? 'es' : 'en';
      renderAll(lang);
      
      // Persist choice
      try { localStorage.setItem('preferredLang', lang); } catch(e){}
    }

    function initLanguage() {
      let lang = 'en';
      try {
        const saved = localStorage.getItem('preferredLang');
        if (saved === 'es' || saved === 'en') lang = saved;
      } catch(e){}
      
      currentLang = lang;
      document.documentElement.lang = (lang === 'es') ? 'es' : 'en';
      renderAll(lang);
    }

    // Navbar scroll effect + mobile menu
    function initNavbar() {
      const navbar = document.getElementById('navbar');
      const mobileBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');

      window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
          navbar.classList.add('nav-scrolled');
        } else {
          navbar.classList.remove('nav-scrolled');
        }
      });

      // Mobile menu
      mobileBtn.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden', !isHidden);
        
        const icon = mobileBtn.querySelector('i');
        icon.classList.toggle('fa-bars', !isHidden);
        icon.classList.toggle('fa-times', isHidden);
      });

      // Close mobile menu when clicking a link
      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
          const icon = mobileBtn.querySelector('i');
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-times');
        });
      });
    }



    function copyEmail() {
      navigator.clipboard.writeText('danipereza@gmail.com').then(() => {
        // Simple toast
        const toast = document.createElement('div');
        toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-sm px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2';
        toast.innerHTML = `<i class="fa-solid fa-check"></i> <span>Email copied to clipboard</span>`;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2200);
      }).catch(() => {
        // Fallback
        window.location.href = 'mailto:danipereza@gmail.com';
      });
    }

    function sendEmail(e) {
      e.preventDefault();
      
      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const message = document.getElementById('form-message').value.trim();
      
      const subject = encodeURIComponent(`Opportunity inquiry from ${name}`);
      const body = encodeURIComponent(`Hi Daniel,\n\nMy name is ${name} (${email}).\n\n${message}\n\nBest regards,\n${name}`);
      
      window.location.href = `mailto:danipereza@gmail.com?subject=${subject}&body=${body}`;
      
      // Reset form
      setTimeout(() => {
        e.target.reset();
      }, 800);
    }

    function initYear() {
      document.getElementById('year').textContent = new Date().getFullYear();
    }

    function initSmoothAnchors() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // Skip the logo link (it has its own top handler)
        if (anchor.id === 'logo-link') return;

        anchor.addEventListener('click', function(e) {
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            e.preventDefault();
            const navHeight = 64;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - navHeight;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        });
      });
    }

    function initBackToTop() {
      const backToTopBtn = document.getElementById('back-to-top');
      const logoLink = document.getElementById('logo-link');

      // Logo in navbar → scroll to top
      if (logoLink) {
        logoLink.addEventListener('click', (e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }

      if (!backToTopBtn) return;

      const toggleBackToTop = () => {
        if (window.scrollY > 420) {
          backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
          backToTopBtn.classList.add('opacity-100');
        } else {
          backToTopBtn.classList.remove('opacity-100');
          backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
        }
      };

      window.addEventListener('scroll', toggleBackToTop, { passive: true });

      // Initial state
      toggleBackToTop();

      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    function initEventHandlers() {
      // Language toggle buttons
      const langEn = document.getElementById('lang-en');
      const langEs = document.getElementById('lang-es');
      if (langEn) langEn.addEventListener('click', () => setLanguage('en'));
      if (langEs) langEs.addEventListener('click', () => setLanguage('es'));

      // Copy email button
      const copyBtn = document.getElementById('copy-email-btn');
      if (copyBtn) copyBtn.addEventListener('click', copyEmail);

      // Contact form
      const contactForm = document.getElementById('contact-form');
      if (contactForm) contactForm.addEventListener('submit', sendEmail);
    }

    function init() {
      initTailwind();
      initNavbar();
      initYear();
      initSmoothAnchors();
      initBackToTop();
      initEventHandlers();
      initLanguage();
      
      // Keyboard support for lang (optional)
      document.addEventListener('keydown', function(e) {
        if (e.metaKey && e.key.toLowerCase() === 'l') {
          e.preventDefault();
          setLanguage(currentLang === 'en' ? 'es' : 'en');
        }
      });



      console.log('%c[Portfolio] Daniel Pérez Álvarez professional site initialized. EN default + bilingual toggle ready.', 'color:#64748b');
    }

    // Bootstrap
    window.onload = init;
