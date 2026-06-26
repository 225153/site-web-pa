// Constants for menu and header
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const mainHeader = document.getElementById('main-header');
const headerWrapper = mainHeader.querySelector('.flex.justify-between');

// mobile menu toggle
menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    menuToggle.classList.toggle('hamburger-open', isOpen);
});

// Close menu when clicking links
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        menuToggle.classList.remove('hamburger-open');
    });
});

// Header scroll behavior
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        mainHeader.classList.add('shadow-md');
        headerWrapper.classList.remove('h-20');
        headerWrapper.classList.add('h-16');
    } else {
        mainHeader.classList.remove('shadow-md');
        headerWrapper.classList.remove('h-16');
        headerWrapper.classList.add('h-20');
    }
});

// IntersectionObserver for reveal animations
const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Stagger logic for items within a grid
            const children = Array.from(entry.target.children);
            if (children.length > 1) {
                children.forEach((child, index) => {
                    if (child.classList.contains('reveal')) {
                        child.style.transitionDelay = `${index * 100}ms`;
                        child.classList.add('visible');
                    }
                });
            }
            observer.unobserve(entry.target);
        }
    });
};

const revealObserver = new IntersectionObserver(revealCallback, {
    threshold: 0.15
});

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Counter logic
function countUp(el, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            el.innerText = target + (el.innerText.includes('+') ? '+' : '');
            clearInterval(timer);
        } else {
            el.innerText = Math.floor(start) + (el.innerText.includes('+') ? '+' : '');
        }
    }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('[data-target]');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                countUp(counter, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.getElementById('stats-section');
if (statsSection) statsObserver.observe(statsSection);

// Methodology animation logic
const methodologyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate horizontal line
            const line = document.getElementById('timeline-line');
            if (line) line.classList.add('active');

            // Staggered activation of circles
            const steps = document.querySelectorAll('.methodology-step');
            steps.forEach((step, index) => {
                setTimeout(() => {
                    step.classList.add('active');
                }, index * 300);
            });
            methodologyObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const methodologySection = document.getElementById('methodology');
if (methodologySection) methodologyObserver.observe(methodologySection);

// Original form logic
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

document.addEventListener('DOMContentLoaded', () => {
    submitBtn.disabled = !form.checkValidity();
});

// Fonction de validation individuelle
function validateInput(input, errorElement, isEmail = false) {
    if (input.value.trim() === '') {
        errorElement.textContent = "Veuillez remplir tous les champs.";
        errorElement.classList.remove('hidden');
    } else if (isEmail && !input.validity.valid) {
        errorElement.textContent = "Veuillez entrer une adresse e-mail correcte.";
        errorElement.classList.remove('hidden');
    } else {
        errorElement.classList.add('hidden');
    }
}

// Écouteurs d'événements pour la perte de focus (quand l'utilisateur quitte le champ)
nameInput.addEventListener('blur', () => validateInput(nameInput, nameError));
emailInput.addEventListener('blur', () => validateInput(emailInput, emailError, true));
messageInput.addEventListener('blur', () => validateInput(messageInput, messageError));

// Valide le formulaire global à chaque modification
form.addEventListener('input', () => {
    submitBtn.disabled = !form.checkValidity();

    // Retire l'erreur en direct si l'utilisateur corrige pendant la saisie
    if(document.activeElement === nameInput) validateInput(nameInput, nameError);
    if(document.activeElement === emailInput) validateInput(emailInput, emailError, true);
    if(document.activeElement === messageInput) validateInput(messageInput, messageError);
});

// Optionnel: Gère la soumission avec Netlify Forms
form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    submitBtn.disabled = true;
    submitBtn.textContent = "Envoi...";

    const formData = new FormData(form);

    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
    })
    .then(() => {
        Swal.fire({
            icon: 'success',
            title: 'Message Envoyé !',
            text: 'Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.',
            confirmButtonColor: '#002046', // Utilise la couleur "primary" de ton thème
            confirmButtonText: 'Fermer'
        });
        form.reset();
        submitBtn.textContent = "Envoyer";
        submitBtn.disabled = !form.checkValidity();
    })
    .catch((error) => {
        Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer.",
            confirmButtonColor: '#ba1a1a' // Utilise la couleur "error" de ton thème
        });
        submitBtn.disabled = false;
        submitBtn.textContent = "Envoyer";
    });
});

// Respect user motion preference globally
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
}
