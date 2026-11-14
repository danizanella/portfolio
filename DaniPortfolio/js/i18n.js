/* ==========================================================================
   i18n — Español (por defecto) / English
   --------------------------------------------------------------------------
   Cómo agregar un proyecto nuevo:
   1. Duplica project-nexus.html (ej. project-wildflower.html).
   2. Cambia el prefijo de las llaves "nexus." por el del proyecto nuevo.
   3. Agrega el bloque de textos en ES y EN en este archivo.
   Los textos con etiquetas HTML (<strong>, <em>, <span>) usan data-i18n-html.
   ========================================================================== */

const TRANSLATIONS = {
    es: {
        /* ----- Comunes ----- */
        'nav.work': 'Proyectos',
        'nav.lang': 'Cambiar idioma',
        'footer.rights': '© 2026 Daniela Zanella. Todos los derechos reservados.',
        'footer.email': 'Correo',
        'footer.home': 'Volver al inicio',
        'cta.caseStudy': 'Ver caso de estudio',
        'cta.nextProject': 'Ver siguiente proyecto',
        'backToTop': 'Volver arriba',

        /* ----- Index ----- */
        'home.meta.title': 'Daniela Zanella - Diseñadora Senior UX/UI y de Producto',
        'home.meta.description': 'Portafolio de Daniela Zanella. Diseñadora UX/UI y de Producto que crea soluciones B2B y experiencias intuitivas desde 2019.',
        'home.hero.alt': 'Daniela Zanella',
        'home.hero.headline': 'Diseñando soluciones digitales intuitivas, escalables y <span class="highlight">orientadas al negocio</span>.',
        'home.hero.subtitle': 'Hola, soy Daniela Zanella. Diseñadora Senior UX/UI y de Producto, con una trayectoria transformando problemas complejos en experiencias B2B y SaaS bien pensadas desde 2019. Conecto las necesidades de los usuarios con el crecimiento estratégico.',
        'home.statement': '"El diseño no es solo cómo se ve, es cómo funciona y los <span class="highlight italic-serif">problemas</span> que resuelve."',
        'home.nexus.tag1': 'DISEÑO DE PRODUCTO',
        'home.nexus.tag2': 'UX/UI',
        'home.nexus.tag3': 'B2B SAAS',
        'home.nexus.title': 'Nexus',
        'home.nexus.text': 'Rediseño de una plataforma de programas de selección para postulantes, evaluadores y administradores. Un recorrido por cómo logramos que cada usuario supiera siempre cuál era el siguiente paso, con un 40% menos de solicitudes de soporte.',
        'home.nexus.imgAlt': 'Dashboard del postulante en Nexus',

        /* ----- Proyecto: Nexus ----- */
        'nexus.meta.title': 'Nexus, caso de estudio - Daniela Zanella',
        'nexus.meta.description': 'Rediseño de una plataforma B2B de programas de selección para postulantes, evaluadores y administradores.',
        'nexus.tag1': 'B2B SAAS',
        'nexus.tag2': 'DISEÑO DE PRODUCTO',
        'nexus.title': 'Nexus',
        'nexus.subtitle': 'Una plataforma de programas de selección donde cada usuario sabe siempre cuál es el siguiente paso.',
        'nexus.meta.role': 'Rol',
        'nexus.meta.roleValue': 'Diseñadora de Producto',
        'nexus.meta.timeline': 'Duración',
        'nexus.meta.timelineValue': '1 año',
        'nexus.meta.tools': 'Herramientas',
        'nexus.meta.toolsValue': 'Figma, Material Design 3',
        'nexus.meta.platform': 'Plataforma',
        'nexus.meta.platformValue': 'Web y Mobile',

        'nexus.s1.title': '1. Contexto y el problema',
        'nexus.s1.p1': '<strong>Nexus</strong> es una plataforma SaaS B2B que permite a las organizaciones ejecutar programas de selección estructurados: convocatorias abiertas para recibir postulaciones, flujos de revisión en múltiples etapas y procesos de evaluación final, todo dentro de un único producto. La plataforma está diseñada para tres tipos de usuarios: los postulantes, que preparan y envían sus aplicaciones; los evaluadores, que las revisan; y los administradores, que configuran, lanzan y gestionan todo el ciclo de vida del programa.',
        'nexus.s1.p2': 'El producto había crecido de forma orgánica y cada uno de estos roles se había incorporado con el tiempo sin una estrategia de diseño unificada. Como resultado, aunque la plataforma funcionaba técnicamente, generaba fricción en casi todas las etapas del proceso. La organización ya había recopilado comentarios directos de sus clientes más importantes y el diagnóstico era consistente para los tres tipos de usuarios.',
        'nexus.img.process.alt': 'Mi proceso de diseño: Empatizar, Definir, Idear y Prototipar',

        'nexus.s2.title': '2. La solución',
        'nexus.s2.p1': 'Rediseñé la experiencia con un objetivo claro: que cada usuario supiera siempre cuál era el siguiente paso.',
        'nexus.s2.p2': 'Para los postulantes diseñé un dashboard con estados de aplicación, notificaciones en tiempo real e indicadores de progreso.',
        'nexus.s2.p3': 'Para los evaluadores incorporé un resumen estructurado de cada postulación antes de iniciar la revisión, permitiéndoles evaluar con mayor rapidez y consistencia.',
        'nexus.s2.p4': 'Para los administradores rediseñé el flujo de configuración del programa, creé un constructor de formularios basado en componentes reutilizables y diseñé un editor para su página de presentación con vista previa en tiempo real, optimizando también la experiencia para dispositivos móviles.',
        'nexus.s2.p5': 'Todo el producto se construyó sobre Material Design 3, manteniendo consistencia visual y accesibilidad.',
        'nexus.img.dashboard.alt': 'Dashboard final del postulante en Nexus',

        'nexus.s3.title': '3. El proceso',
        'nexus.s3.p1': 'El proyecto comenzó a partir de información obtenida por el equipo de negocio, quienes ya habían identificado los principales problemas mediante entrevistas con clientes. Teniendo en cuenta esto, mi enfoque fue transformar esos hallazgos en soluciones de diseño.',
        'nexus.s3.p2': 'Primero, mapeé el recorrido completo de los tres tipos de usuarios para comprender cómo interactuaban entre sí y dónde se encontraban los potenciales puntos de dolor.',
        'nexus.s3.p3': 'Posteriormente, diseñé wireframes para tener una primera idea de la estructura y la información que necesita el usuario en cada una de las secciones de la plataforma.',
        'nexus.img.ia.alt': 'Arquitectura de información de Nexus por tipo de usuario: postulante, evaluador y administrador',
        'nexus.s3.p4': 'Uno de los mayores retos fue adaptar estas funcionalidades a dispositivos móviles. En lugar de utilizar patrones complejos como drag & drop, aproveché componentes nativos de Material Design 3, como bottom sheets, acordeones y modales, para mantener una experiencia simple y, por supuesto, accesible.',

        'nexus.s4.title': '4. Resultados e impacto en el negocio',
        'nexus.s4.p1': 'Tras la implementación en las primeras organizaciones clientes de la plataforma, el rediseño generó mejoras significativas para los tres tipos de usuarios.',
        'nexus.s4.m1.value': '-40%',
        'nexus.s4.m1.label': 'Solicitudes de soporte',
        'nexus.s4.m2.value': '85%',
        'nexus.s4.m2.label': 'Finalización de postulaciones',
        'nexus.s4.m3.value': '-30%',
        'nexus.s4.m3.label': 'Tiempo de configuración',

        'nexus.s5.title': '5. Aprendizajes y conclusiones',
        'nexus.s5.p1': 'Al no tener acceso directo a los usuarios, tuve que trabajar con la información recopilada por la organización y traducirla en decisiones de diseño. También pude profundizar en el diseño de productos B2B complejos y aprender a adaptar experiencias administrativas para dispositivos móviles sin romper las reglas del sistema de diseño.',
        'nexus.s5.p2': 'Trabajar con Material Design 3 me permitió mejorar en la construcción de sistemas de diseño: más que crear nuevos componentes, el reto fue seleccionar los que ya existen en la librería y adaptarlos a las necesidades de los usuarios, para lograr soluciones consistentes, accesibles y escalables.',

        /* ----- Otros proyectos (placeholders) ----- */
        'other.title': 'Otros proyectos',
        'other.subtitle': '¡Más ejemplos de mi trabajo!',
        'other.p1.brand': 'WILDFLOWER',
        'other.p1.title': 'De bajo engagement a una UX personalizada y escalable',
        'other.p1.text': 'Rediseño de una app móvil B2C de marca blanca, creando una experiencia flexible y centrada en el usuario que se proyecta para aumentar el engagement, la satisfacción y la retención a largo plazo.',
        'other.p2.brand': 'Therabody',
        'other.p2.title': 'Optimizando la PDP de Therabody.com para conversión',
        'other.p2.text': 'Uso de pruebas A/B ligeras para aumentar hasta un 22% la conversión de las páginas de producto, sin sobrecargar los tiempos de ingeniería.'
    },

    en: {
        /* ----- Common ----- */
        'nav.work': 'Projects',
        'nav.lang': 'Change language',
        'footer.rights': '© 2026 Daniela Zanella. All rights reserved.',
        'footer.email': 'Email',
        'footer.home': 'Back to Home',
        'cta.caseStudy': 'View Case Study',
        'cta.nextProject': 'View Next Project',
        'backToTop': 'Back to top',

        /* ----- Index ----- */
        'home.meta.title': 'Daniela Zanella - Senior UX/UI & Product Designer',
        'home.meta.description': 'Portfolio of Daniela Zanella. UX/UI & Product Designer crafting B2B solutions and intuitive experiences since 2019.',
        'home.hero.alt': 'Daniela Zanella',
        'home.hero.headline': 'Designing digital solutions that are intuitive, scalable, and <span class="highlight">business-driven</span>.',
        'home.hero.subtitle': 'Hi, I\'m Daniela Zanella. A Senior UX/UI & Product Designer with a track record of translating complex problems into thoughtful B2B and SaaS experiences since 2019. I bridge the gap between user needs and strategic growth.',
        'home.statement': '"Design isn\'t just about what it looks like, it\'s about how it works and the <span class="highlight italic-serif">problems</span> it solves."',
        'home.nexus.tag1': 'PRODUCT DESIGN',
        'home.nexus.tag2': 'UX/UI',
        'home.nexus.tag3': 'B2B SAAS',
        'home.nexus.title': 'Nexus',
        'home.nexus.text': 'Redesigning a selection-program platform for applicants, reviewers and administrators. A look at how we made sure every user always knew what to do next, cutting support requests by 40%.',
        'home.nexus.imgAlt': 'Nexus applicant dashboard',

        /* ----- Project: Nexus ----- */
        'nexus.meta.title': 'Nexus Case Study - Daniela Zanella',
        'nexus.meta.description': 'Redesigning a B2B selection-program platform for applicants, reviewers and administrators.',
        'nexus.tag1': 'B2B SAAS',
        'nexus.tag2': 'PRODUCT DESIGN',
        'nexus.title': 'Nexus',
        'nexus.subtitle': 'A selection-program platform where every user always knows what to do next.',
        'nexus.meta.role': 'Role',
        'nexus.meta.roleValue': 'Product Designer',
        'nexus.meta.timeline': 'Timeline',
        'nexus.meta.timelineValue': '1 year',
        'nexus.meta.tools': 'Tools',
        'nexus.meta.toolsValue': 'Figma, Material Design 3',
        'nexus.meta.platform': 'Platform',
        'nexus.meta.platformValue': 'Web & Mobile',

        'nexus.s1.title': '1. Context & The Problem',
        'nexus.s1.p1': '<strong>Nexus</strong> is a B2B SaaS platform that enables organizations to run structured selection programs, including open calls for applications, multi-stage review workflows, and final evaluation processes, all within a single product. The platform serves three types of users: applicants, who prepare and submit applications; reviewers, who evaluate them; and administrators, who configure, launch, and manage the entire program lifecycle.',
        'nexus.s1.p2': 'As the product evolved organically, each user role was added over time without a unified design strategy. Although the platform functioned correctly, the overall experience created friction throughout the process. The organization had already gathered feedback from key clients, and the same pain points consistently appeared across all three user groups.',
        'nexus.img.process.alt': 'My design process: Empathize, Define, Ideate and Prototype',

        'nexus.s2.title': '2. The Solution',
        'nexus.s2.p1': 'I redesigned the experience with one clear goal: to ensure every user always knew what to do next.',
        'nexus.s2.p2': 'For applicants, I designed a dashboard that displayed application status, real-time notifications, and progress indicators.',
        'nexus.s2.p3': 'For reviewers, I introduced a structured application overview before the evaluation process, allowing them to review submissions more efficiently and consistently.',
        'nexus.s2.p4': 'For administrators, I redesigned the program setup flow, created a reusable component-based form builder, and designed a marketing page editor with a live preview, while also optimizing the experience for mobile devices.',
        'nexus.s2.p5': 'The entire product was built using Material Design 3, ensuring visual consistency and accessibility across the platform.',
        'nexus.img.dashboard.alt': 'Final applicant dashboard in Nexus',

        'nexus.s3.title': '3. The Process',
        'nexus.s3.p1': 'The project began with insights gathered by the business team, who had already identified the main pain points through client interviews. Based on this research, my role was to translate those findings into design solutions.',
        'nexus.s3.p2': 'I first mapped the complete journey of all three user types to understand how they interacted with one another and identify potential friction points throughout the experience.',
        'nexus.s3.p3': 'Next, I created wireframes to define the information architecture and establish the content and structure users needed across each section of the platform.',
        'nexus.img.ia.alt': 'Nexus information architecture by user type: applicant, evaluator and admin',
        'nexus.s3.p4': 'One of the biggest challenges was adapting these complex workflows for mobile devices. Instead of relying on interaction patterns such as drag-and-drop, I leveraged native Material Design 3 components—including bottom sheets, accordions, and modal dialogs—to deliver a simple, intuitive, and accessible mobile experience.',

        'nexus.s4.title': '4. Results & Business Impact',
        'nexus.s4.p1': 'After the redesign was rolled out to the platform\'s first client organizations, it delivered meaningful improvements across all three user groups.',
        'nexus.s4.m1.value': '-40%',
        'nexus.s4.m1.label': 'Support requests',
        'nexus.s4.m2.value': '85%',
        'nexus.s4.m2.label': 'Application completion rate',
        'nexus.s4.m3.value': '-30%',
        'nexus.s4.m3.label': 'Program setup time',

        'nexus.s5.title': '5. Learnings & Takeaways',
        'nexus.s5.p1': 'Since I didn\'t have direct access to end users, I relied on the research gathered by the organization and translated those insights into design decisions. This project also allowed me to deepen my experience designing complex B2B products and adapting administrative workflows for mobile without compromising the design system.',
        'nexus.s5.p2': 'Working with Material Design 3 strengthened my understanding of design systems. Rather than creating new components, the challenge was selecting and adapting existing components from the library to meet users\' needs while delivering solutions that were consistent, accessible, and scalable.',

        /* ----- Other projects (placeholders) ----- */
        'other.title': 'Other projects',
        'other.subtitle': 'More examples of my work!',
        'other.p1.brand': 'WILDFLOWER',
        'other.p1.title': 'From low engagement to personalized, scalable UX',
        'other.p1.text': 'Redesigned a white-labeled B2C mobile app, creating a flexible, user-centered experience that\'s projected to increase engagement, satisfaction, and long-term retention.',
        'other.p2.brand': 'Therabody',
        'other.p2.title': 'Optimizing Therabody.com\'s PDP for conversion',
        'other.p2.text': 'Used lightweight A/B testing to increase product page conversion rates by up to 22%—without bloating engineering timelines.'
    }
};

(function () {
    const DEFAULT_LANG = 'es';
    const SUPPORTED = ['es', 'en'];
    const STORAGE_KEY = 'dz-lang';

    function safeGet() {
        try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
    }
    function safeSet(value) {
        try { localStorage.setItem(STORAGE_KEY, value); } catch (e) { /* sin storage: no pasa nada */ }
    }

    function initialLang() {
        const fromUrl = new URLSearchParams(window.location.search).get('lang');
        if (SUPPORTED.includes(fromUrl)) return fromUrl;
        const stored = safeGet();
        if (SUPPORTED.includes(stored)) return stored;
        return DEFAULT_LANG;
    }

    function applyLanguage(lang) {
        const dict = TRANSLATIONS[lang];
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const value = dict[el.dataset.i18n];
            if (value !== undefined) el.textContent = value;
        });

        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const value = dict[el.dataset.i18nHtml];
            if (value !== undefined) el.innerHTML = value;
        });

        // data-i18n-attr="alt:key; aria-label:otherKey"
        document.querySelectorAll('[data-i18n-attr]').forEach(el => {
            el.dataset.i18nAttr.split(';').forEach(pair => {
                const [attr, key] = pair.split(':').map(s => s.trim());
                if (attr && dict[key] !== undefined) el.setAttribute(attr, dict[key]);
            });
        });

        const titleKey = document.body.dataset.titleKey;
        if (titleKey && dict[titleKey]) document.title = dict[titleKey];
        const descKey = document.body.dataset.descKey;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (descKey && metaDesc && dict[descKey]) metaDesc.setAttribute('content', dict[descKey]);

        document.querySelectorAll('.lang-option').forEach(btn => {
            const active = btn.dataset.lang === lang;
            btn.classList.toggle('active', active);
            btn.setAttribute('aria-pressed', String(active));
        });
    }

    function setLanguage(lang) {
        if (!SUPPORTED.includes(lang)) return;
        safeSet(lang);
        applyLanguage(lang);
    }

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.lang-option').forEach(btn => {
            btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
        });
        applyLanguage(initialLang());
    });

    window.setLanguage = setLanguage;
})();
