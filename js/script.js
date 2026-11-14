// URLs limpias
// En el sitio publicado (GitHub Pages) los enlaces ya son limpios: "./" y "project-nexus".
// En local (doble clic o localhost) no existe esa magia del servidor, así que
// se les agrega ".html" para que la navegación siga funcionando al probar.
(function cleanUrls() {
    const isLocal = !/^https?:$/.test(location.protocol) ||
        ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname);

    if (isLocal) {
        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('a[href]').forEach(a => {
                const href = a.getAttribute('href');
                if (/^(https?:|mailto:|#)/.test(href)) return;
                const [path, hash] = href.split('#');
                let fixed = path;
                if (path === './' || path === '') fixed = 'index.html';
                else if (!/\.[a-z0-9]+$/i.test(path)) fixed = path + '.html';
                a.setAttribute('href', fixed + (hash ? '#' + hash : ''));
            });
        });
        return;
    }

    // Publicado: si alguien entra directo a /index.html o /algo.html, se limpia la barra de direcciones
    const cleanPath = location.pathname.replace(/index\.html$/, '').replace(/\.html$/, '');
    if (cleanPath !== location.pathname) {
        history.replaceState(null, '', cleanPath + location.search + location.hash);
    }
})();

document.addEventListener("DOMContentLoaded", () => {
    // 1. Intersection Observer for fade-in animations on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in');
    animatedElements.forEach(el => observer.observe(el));
    
    setTimeout(() => {
        animatedElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if(rect.top < window.innerHeight) {
                el.classList.add('visible');
                observer.unobserve(el);
            }
        });
    }, 100);

    // 2. Navbar & Back to Top logic on scroll
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        // Sticky Navbar
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Back to top visibility
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // 3. Smooth scrolling for anchor links
    // Links placeholder (proyectos aún no creados): no hacen nada
    document.querySelectorAll('a.is-placeholder').forEach(a => {
        a.addEventListener('click', e => e.preventDefault());
    });

    document.querySelectorAll('a[href^="#"]:not(.is-placeholder)').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Adjust scroll position to account for sticky navbar
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
                window.scrollTo({
                     top: offsetPosition,
                     behavior: "smooth"
                });
            } else if (this.getAttribute('href') === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        });
    });

    // 4. Custom Cursor
    const cursor = document.getElementById('customCursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            // Use translate3d for better performance
            cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
        });

        // Add expand effect on hoverable elements
        const clickables = document.querySelectorAll('a, button, .case-card, .btn-primary, .other-card');
        clickables.forEach((el) => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('expand');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('expand');
            });
        });
    }
});
