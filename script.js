function handleResize() {
    if (window.innerWidth > 768) {
        closeMenu();
    }
}

window.addEventListener('resize', handleResize);

// Nav scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 30);
    }, { passive: true });

    // Mobile menu
    const btn       = document.getElementById('hamburger-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const iconOpen  = document.getElementById('icon-open');
    const iconClose = document.getElementById('icon-close');

    function closeMenu() {
        mobileNav.classList.remove('open');
        iconOpen.style.display  = 'block';
        iconClose.style.display = 'none';
        document.body.style.overflow = ''
    }
    btn.addEventListener('click', () => {
        const isOpen = mobileNav.classList.toggle('open');
        iconOpen.style.display  = isOpen ? 'none'  : 'block';
        iconClose.style.display = isOpen ? 'block' : 'none';
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('click', e => { if (!navbar.contains(e.target)) closeMenu(); });

    // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));