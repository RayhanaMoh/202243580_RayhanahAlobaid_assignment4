// *************   1   ****************
// Greeting message based on time of day with real-time clock display
// ************************************
function updateGreeting() {
    const greetingElement = document.getElementById('greeting');
    if (!greetingElement) return;

    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const timeString = `${hour.toString().padStart(2, '0')}:${minutes}:${seconds}`;

    let message = "";

    if (hour >= 5 && hour < 12) {
        message = "Good Morning";
    } else if (hour >= 12 && hour < 18) {
        message = "Good Afternoon";
    } else if (hour >= 18 && hour < 22) {
        message = "Good Evening";
    } else {
        message = "Welcome";
    }

    greetingElement.innerHTML = `${message}, <span class="time-display">${timeString}</span>`;
}

// *************   2   ****************
// Helper function for smooth scrolling
// ************************************
function setupScroll(linkId, sectionId) {
    const link = document.getElementById(linkId);
    const section = document.getElementById(sectionId);

    if (link && section) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });

        link.style.cursor = 'pointer';
    }
}

// Run everything after page loads
document.addEventListener('DOMContentLoaded', () => {
    updateGreeting();
    setInterval(updateGreeting, 1000);

    setupScroll('aboutLink', 'about');
    setupScroll('skillsLink', 'skills');
    setupScroll('projectsLink', 'projects');
    setupScroll('contactBtn', 'contact');
    setupScroll('nameLeft', 'content');

    const githubBtn = document.getElementById('githubBtn');
    if (githubBtn) {
        githubBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://github.com/RayhanaMoh', '_blank');
        });
    }

    const cvBtn = document.getElementById('cvBtn');
    if (cvBtn) {
        cvBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('assets/Files/CV.pdf', '_blank');
        });
    }


    // expand / collapse
    const collapsibleCards = document.querySelectorAll('.collapsible-card');

    collapsibleCards.forEach(card => {
        const toggleText = card.querySelector('.toggle-text');

        if (toggleText) {
            toggleText.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();

                card.classList.toggle('active');

                if (card.classList.contains('active')) {
                    toggleText.textContent = 'Show Less';
                } else {
                    toggleText.textContent = '...Show More';
                }
            });
        }
    });

    // open Masarra link when clicking card itself
    const masarraCard = document.getElementById('project1');
    if (masarraCard) {
        masarraCard.addEventListener('click', () => {
            window.open('https://masarra.world/', '_blank');
        });

        masarraCard.style.cursor = 'pointer';
    }

    // Contact form validation
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    function showMessage(text, type) {
        formMessage.textContent = text;
        formMessage.classList.remove('success', 'error', 'show');
        formMessage.style.display = 'block';

        formMessage.classList.add(type);

        setTimeout(() => {
            formMessage.classList.add('show');
        }, 100);
    }

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (name === '' || email === '' || message === '') {
                showMessage('Please fill in all fields before sending your message.', 'error');
                return;
            }

            if (!emailPattern.test(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }

            if (message.length < 10) {
                showMessage('Your message is too short. Please write at least 10 characters.', 'error');
                return;
            }

            showMessage(`Thank you, ${name}! Your message has been sent successfully.`, 'success');
            contactForm.reset();
        });
    }

});