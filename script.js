document.addEventListener("DOMContentLoaded", function() {
    // Typed.js initialization
    var typed = new Typed('.typed-text', {
        strings: ["Frontend Developer", "Web Designer", "React Enthusiast", "UI/UX Lover"],
        typeSpeed: 60,
        backSpeed: 50,
        loop: true
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        menuToggle.innerHTML = sidebar.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    function toggleMenu() {
        document.getElementById('sidebar').classList.toggle('active');
      }

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav1 a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
            
            // Update active class
            document.querySelectorAll('.nav1 a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

    // Set first nav item as active on page load
    const navLinks = document.querySelectorAll('.nav1 a');
    const sections = document.querySelectorAll('section');
    
    function setActiveNav() {
        let index = sections.length;
        
        while(--index && window.scrollY + 100 < sections[index].offsetTop) {}
        
        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }
    
    setActiveNav();
    window.addEventListener('scroll', setActiveNav);
});