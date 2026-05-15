document.addEventListener('DOMContentLoaded', () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        document.body.classList.add('no-motion');
    }

    const navbar = document.querySelector('.navbar');
    const updateNavbar = () => {
        if (!navbar) return;
        navbar.classList.toggle('is-scrolled', window.scrollY > 50);
    };

    updateNavbar();
    window.addEventListener('scroll', updateNavbar, { passive: true });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            const navHeight = navbar ? navbar.offsetHeight : 0;
            const targetPosition = target.offsetTop - navHeight - 20;
            window.scrollTo({
                top: targetPosition,
                behavior: prefersReducedMotion ? 'auto' : 'smooth'
            });
        });
    });

    const screenshotContainer = document.querySelector('.screenshot-container');
    if (screenshotContainer) {
        let isDown = false;
        let startX = 0;
        let scrollLeft = 0;

        screenshotContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - screenshotContainer.offsetLeft;
            scrollLeft = screenshotContainer.scrollLeft;
        });

        screenshotContainer.addEventListener('mouseleave', () => {
            isDown = false;
        });

        screenshotContainer.addEventListener('mouseup', () => {
            isDown = false;
        });

        screenshotContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - screenshotContainer.offsetLeft;
            const walk = (x - startX) * 2;
            screenshotContainer.scrollLeft = scrollLeft - walk;
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.feature-card, .screenshot').forEach((element, index) => {
        element.classList.add('reveal');
        element.style.transitionDelay = `${Math.min(index, 5) * 0.08}s`;
        observer.observe(element);
    });
});
