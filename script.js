
document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".input", {
        strings: ["Shreya Singh.", "Web Developer.", "Responsive Web Designer."],
        typeSpeed: 65,
        backSpeed: 55,
        loop: true
    });

    let menuIcons = document.querySelector(".menu-icons");
    let navbar = document.querySelector(".navbar");
    let icons = document.querySelector(".menu-icons i");

    menuIcons.addEventListener("click", function () {
        navbar.classList.toggle("open");
        if (icons.classList.contains("fa-bars")) {
            icons.classList.remove("fa-bars");
            icons.classList.add("fa-times");
        } else {
            icons.classList.remove("fa-times");
            icons.classList.add("fa-bars");
        }
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
