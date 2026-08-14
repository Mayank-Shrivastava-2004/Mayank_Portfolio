/* ============================================================
   MAYANK SHRIVASTAVA — PORTFOLIO SCRIPTS
   ============================================================ */

/* ----------------------------------------------------------
   ★ CONFIGURATION — Update these two values to customize
     your portfolio without touching any other code.
---------------------------------------------------------- */
const CONFIG = {
    /**
     * RESUME LINK
     * ─────────────────────────────────────────────────────
     * Paste your public Google Drive PDF link here.
     */
    RESUME_LINK: "https://drive.google.com/file/d/13GmaBjzRvnZwctaG0xWMtKwwyMtlhNy9/view?usp=sharing",

    /**
     * FORMSPREE FORM ID
     * ─────────────────────────────────────────────────────
     * How to set up (takes 2 minutes, it's free):
     *   1. Go to https://formspree.io and sign up (free).
     *   2. Click "New Form" → name it "Portfolio Contact".
     *   3. Copy the Form ID (looks like: xpwzkqab).
     *   4. Paste ONLY the ID (not the full URL) below.
     *
     * Your form submissions will arrive at:
     *   mayankshrivastava85994@gmail.com
     */
    FORMSPREE_ID: "YOUR_FORMSPREE_ID_HERE",
};
/* ---------------------------------------------------------- */


document.addEventListener('DOMContentLoaded', () => {

    /* ============================================================
       1. AOS — ANIMATE ON SCROLL
    ============================================================ */
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 900,
            easing: 'ease-out-quart',
            once: true,
            offset: 80,
        });
    }

    /* ============================================================
       2. PARTICLES.JS — HERO BACKGROUND
    ============================================================ */
    if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 45, density: { enable: true, value_area: 900 } },
                color: { value: "#4f8ef7" },
                shape: { type: "circle" },
                opacity: { value: 0.3, random: true },
                size: { value: 2.5, random: true },
                line_linked: {
                    enable: true,
                    distance: 160,
                    color: "#4f8ef7",
                    opacity: 0.15,
                    width: 1
                },
                move: {
                    enable: true, speed: 1.2, direction: "none",
                    random: true, straight: false, out_mode: "out", bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "grab" },
                    onclick: { enable: false },
                    resize: true
                },
                modes: {
                    grab: { distance: 140, line_linked: { opacity: 0.35 } }
                }
            },
            retina_detect: true
        });
    }

    /* ============================================================
       3. RESUME BUTTON — Google Drive dynamic link
    ============================================================ */
    const resumeBtn = document.getElementById('resume-btn');
    if (resumeBtn && CONFIG.RESUME_LINK !== "YOUR_GOOGLE_DRIVE_LINK_HERE") {
        resumeBtn.href = CONFIG.RESUME_LINK;
    } else if (resumeBtn) {
        resumeBtn.href = "Mayank_Resume.pdf";
    }

    /* ============================================================
       4. CUSTOM CURSOR
    ============================================================ */
    const cursor = document.querySelector('.cursor');
    const cursorOuter = document.querySelector('.cursor-outer');

    if (cursor && cursorOuter && window.matchMedia('(pointer: fine)').matches) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top  = `${e.clientY}px`;
            cursorOuter.animate(
                { left: `${e.clientX}px`, top: `${e.clientY}px` },
                { duration: 450, fill: "forwards" }
            );
        });

        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
            cursorOuter.style.opacity = '0';
        });

        document.addEventListener('mouseenter', () => {
            cursor.style.opacity = '1';
            cursorOuter.style.opacity = '1';
        });

        const interactiveEls = document.querySelectorAll('a, button, .skill-tag, .project-card');
        interactiveEls.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(0)';
                cursorOuter.style.transform = 'translate(-50%, -50%) scale(1.6)';
                cursorOuter.style.borderColor = 'var(--clr-primary)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorOuter.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorOuter.style.borderColor = 'rgba(79, 142, 247, 0.45)';
            });
        });
    } else {
        if (cursor) cursor.style.display = 'none';
        if (cursorOuter) cursorOuter.style.display = 'none';
    }

    /* ============================================================
       5. NAVBAR — scroll effect
    ============================================================ */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });

    /* ============================================================
       6. MOBILE MENU — Drawer toggle
    ============================================================ */
    const navToggle     = document.getElementById('nav-toggle');
    const navDrawer     = document.getElementById('nav-drawer');
    const drawerOverlay = document.getElementById('drawer-overlay');

    function openDrawer() {
        navDrawer.classList.add('open');
        drawerOverlay.classList.add('open');
        navToggle.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        navDrawer.classList.remove('open');
        drawerOverlay.classList.remove('open');
        navToggle.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navDrawer.classList.contains('open') ? closeDrawer() : openDrawer();
        });
    }

    if (drawerOverlay) {
        drawerOverlay.addEventListener('click', closeDrawer);
    }

    if (navDrawer) {
        navDrawer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeDrawer);
        });
    }

    /* ============================================================
       7. ACTIVE NAV LINK — highlight on scroll
    ============================================================ */
    const sections = document.querySelectorAll('section[id]');
    const navLinks  = document.querySelectorAll('.navbar__links a');

    function updateActiveLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 130;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href && href === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink, { passive: true });

    /* ============================================================
       8. SCROLL PROGRESS BAR + BACK TO TOP
    ============================================================ */
    const scrollBar = document.getElementById('scroll-progress');
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        const scrollTop    = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled     = (scrollTop / scrollHeight) * 100;

        if (scrollBar) scrollBar.style.width = `${scrolled}%`;

        if (backToTop) {
            if (scrollTop > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
    }, { passive: true });

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ============================================================
       9. TYPING EFFECT
    ============================================================ */
    const typingEl  = document.getElementById('typing-text');
    const roles     = ['Frontend Developer Intern', 'Full Stack Engineer', 'React & Next.js Developer', 'Java Specialist', 'Problem Solver'];
    let roleIndex   = 0;
    let charIndex   = 0;
    let isDeleting  = false;
    let typeTimer;

    function typeLoop() {
        const current = roles[roleIndex];

        if (isDeleting) {
            typingEl.textContent = current.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingEl.textContent = current.substring(0, charIndex + 1);
            charIndex++;
        }

        let delay = isDeleting ? 50 : 130;

        if (!isDeleting && charIndex === current.length) {
            delay = 2200;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex  = (roleIndex + 1) % roles.length;
            delay = 400;
        }

        typeTimer = setTimeout(typeLoop, delay);
    }

    if (typingEl) typeLoop();

    /* ============================================================
       10. SKILL BARS ANIMATION
    ============================================================ */
    const skillBars = document.querySelectorAll('.skill-bar__fill');

    if ('IntersectionObserver' in window) {
        const barObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.dataset.width;
                    bar.style.width = `${width}%`;
                    bar.classList.add('animated');
                    barObserver.unobserve(bar);
                }
            });
        }, { threshold: 0.3 });

        skillBars.forEach(bar => barObserver.observe(bar));
    } else {
        skillBars.forEach(bar => {
            bar.style.width = `${bar.dataset.width}%`;
        });
    }

    /* ============================================================
       11. CONTACT FORM — Live Formspree / API submission
    ============================================================ */
    const contactForm   = document.getElementById('contact-form');
    const formStatus    = document.getElementById('form-status');
    const formSubmitBtn = document.getElementById('form-submit');
    const formBtnText   = document.getElementById('form-btn-text');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Disable button + show loading spinner
            formSubmitBtn.disabled = true;
            formBtnText.textContent = 'Sending Message...';
            formSubmitBtn.querySelector('i').className = 'fas fa-spinner fa-spin';
            if (formStatus) {
                formStatus.textContent = '';
                formStatus.className = 'form-status';
            }

            const formData = new FormData(contactForm);
            const formEndpoint = (CONFIG.FORMSPREE_ID && CONFIG.FORMSPREE_ID !== "YOUR_FORMSPREE_ID_HERE")
                ? `https://formspree.io/f/${CONFIG.FORMSPREE_ID}`
                : "https://formspree.io/f/mayankshrivastava85994@gmail.com";

            try {
                const response = await fetch(formEndpoint, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    if (formStatus) {
                        formStatus.textContent = '✓ Thank you! Your message has been sent successfully. I will get back to you shortly.';
                        formStatus.className = 'form-status success';
                    }
                    contactForm.reset();
                } else {
                    const data = await response.json().catch(() => ({}));
                    throw new Error(data.errors?.[0]?.message || 'Failed to submit form.');
                }
            } catch (err) {
                if (formStatus) {
                    formStatus.textContent = `✗ ${err.message || "Failed to send."} Please email directly at mayankshrivastava85994@gmail.com`;
                    formStatus.className = 'form-status error';
                }
            } finally {
                formSubmitBtn.disabled = false;
                formBtnText.textContent = 'Send Message';
                formSubmitBtn.querySelector('i').className = 'fas fa-paper-plane';
            }
        });
    }

});
