// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', () => {
    // Check if AOS is available (loaded from CDN)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }

    // --- Custom Cursor Logic ---
    const cursor = document.querySelector('.cursor');
    const cursorOuter = document.querySelector('.cursor-outer');
    
    document.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        
        cursor.style.left = `${posX}px`;
        cursor.style.top = `${posY}px`;
        
        // Slightly delayed animation for the outer ring
        cursorOuter.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Cursor hover effect on interactive elements
    const links = document.querySelectorAll('a, button, .skill-item, .project-card');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(2)';
            cursor.style.backgroundColor = 'transparent';
            cursor.style.border = '1px solid #0ea5e9';
            cursorOuter.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });
        link.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.backgroundColor = '#0ea5e9';
            cursor.style.border = 'none';
            cursorOuter.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });

    // --- Header Scroll Effect ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Typing Effect ---
    const typingText = document.getElementById('typing-text');
    const professions = ['Full Stack Developer', 'Software Engineer', 'Creative Thinker', 'Problem Solver'];
    let profIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentProf = professions[profIdx];
        
        if (isDeleting) {
            typingText.textContent = currentProf.substring(0, charIdx - 1);
            charIdx--;
            typeSpeed = 50;
        } else {
            typingText.textContent = currentProf.substring(0, charIdx + 1);
            charIdx++;
            typeSpeed = 150;
        }

        if (!isDeleting && charIdx === currentProf.length) {
            isDeleting = true;
            typeSpeed = 2000; // Wait at the end
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            profIdx = (profIdx + 1) % professions.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }
    
    if (typingText) type();

    // --- Mobile Menu Toggle ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            mobileMenu.classList.toggle('active');
        });
    }

    // --- Active Link Highlight on Scroll ---
    const sections = document.querySelectorAll('section');
    const navA = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navA.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });

    // --- Form Submission Handling ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
            btn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                alert('Thank you, Mayank! Your message has been sent successfully. (Note: This is a demo integration)');
                contactForm.reset();
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 2000);
        });
    }
});
