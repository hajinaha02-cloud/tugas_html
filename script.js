// script.js

// Hamburger Menu Toggle Functionality
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth Scrolling
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form Submission Handling
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    alert('Form submitted!'); // Perform submission logic here
});

// Intersection Observer Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        } else {
            entry.target.classList.remove('fade-in');
        }
    });
});

const animatedElements = document.querySelectorAll('.animate');
animatedElements.forEach(element => {
    observer.observe(element);
});

// Progress Bar Animation
const progressBars = document.querySelectorAll('.progress-bar');

progressBars.forEach(bar => {
    const percentage = bar.dataset.percent;
    bar.style.width = percentage + '%';
    bar.style.transition = 'width 2s';
});