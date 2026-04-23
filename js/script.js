// *************   1   ****************
// Greeting message based on time of day with real-time clock display
// ************************************
function updateGreeting() {
    const greetingElement = document.getElementById('greeting');
    if (!greetingElement) return;

    const now = new Date();

    // Get current time
    const hour = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hour.toString().padStart(2, '0')}:${minutes}:${seconds}`;

    // Decide greeting based on time
    let message = '';
    if (hour >= 5 && hour < 12)       message = 'Good Morning';
    else if (hour >= 12 && hour < 18)  message = 'Good Afternoon';
    else if (hour >= 18 && hour < 22)  message = 'Good Evening';
    else                               message = 'Welcome';

    // Get saved visitor name (if exists)
    const savedName = localStorage.getItem('visitorName');
    const nameDisplay = savedName ? `, ${savedName}` : '';

    // Render greeting + time + optional reset button
    greetingElement.innerHTML = `
        ${message}${nameDisplay} <span class="time-display">${timeString}</span>
        ${savedName ? '<button class="reset-name" id="resetName">Not you?</button>' : ''}
    `;

    // Reset name handler
    const resetBtn = document.getElementById('resetName');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            localStorage.removeItem('visitorName');
            const overlay = document.getElementById('nameModalOverlay');
            if (overlay) overlay.classList.remove('hidden');
        });
    }
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
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        link.style.cursor = 'pointer';
    }
}

let allRepos = [];
let currentFilter = "all";

// *************   3   ****************
// GitHub REPOS + Filtering
// ************************************
function renderRepos(repos) {
    const grid = document.getElementById('reposGrid');
    if (!grid) return;

    if (!repos.length) {
        grid.innerHTML = '<p class="repos-loading">No repositories found.</p>';
        return;
    }

    grid.innerHTML = repos.map(repo => {
        const desc = repo.description || 'No description provided.';
        const lang = repo.language || 'Other';

        const updated = new Date(repo.updated_at).toLocaleDateString('en-US', {
            year: 'numeric', month: 'short', day: 'numeric'
        });

        return `
        <a class="repo-card" href="${repo.html_url}" target="_blank">
            <h3>📁 ${repo.name}</h3>
            <p>${desc}</p>
            <div class="repo-meta">
                <span class="repo-lang">${lang}</span>
            </div>
            <p class="repo-updated">Updated: ${updated}</p>
        </a>`;
    }).join('');
}


// Filter function
function filterRepos(lang) {
    currentFilter = lang;

    const filtered = lang === "all"
        ? allRepos
        : allRepos.filter(repo => repo.language === lang);

    renderRepos(filtered);
}


// Load GitHub repos
async function loadGitHubRepos() {
    const grid = document.getElementById('reposGrid');
    const errorEl = document.getElementById('reposError');
    if (!grid) return;

    grid.innerHTML = '<p class="repos-loading">Loading repositories…</p>';

    try {
        const res = await fetch('https://api.github.com/users/RayhanaMoh/repos?sort=updated&per_page=6');
        if (!res.ok) throw new Error("GitHub API error");

        allRepos = await res.json();

        // Save repos globally for filtering
        renderRepos(allRepos);

        // Setup filter buttons AFTER data loads
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn')
                    .forEach(b => b.classList.remove('active'));

                btn.classList.add('active');

                filterRepos(btn.dataset.filter);
            });
        });

    } catch (err) {
        console.error(err);
        grid.innerHTML = '';
        if (errorEl) errorEl.style.display = 'block';
    }
}

// ── Run everything after page loads ──
document.addEventListener('DOMContentLoaded', () => {
    updateGreeting();
    setInterval(updateGreeting, 1000);

    setupScroll('aboutLink',    'about');
    setupScroll('skillsLink',   'skills');
    setupScroll('projectsLink', 'projects');
    setupScroll('contactBtn',   'contact');
    setupScroll('nameLeft',     'content');
    setupScroll('reposLink',    'github-repos');

    // GitHub button
    const githubBtn = document.getElementById('githubBtn');
    if (githubBtn) {
        githubBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://github.com/RayhanaMoh', '_blank');
        });
    }

    // CV button
    const cvBtn = document.getElementById('cvBtn');
    if (cvBtn) {
        cvBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('assets/Files/CV.pdf', '_blank');
        });
    }

    // *************   4   ****************
    // Expand / collapse project cards
    // ************************************
    document.querySelectorAll('.collapsible-card').forEach(card => {
        const toggleText = card.querySelector('.toggle-text');
        if (toggleText) {
            toggleText.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                card.classList.toggle('active');
                toggleText.textContent = card.classList.contains('active') ? 'Show Less' : '...Show More';
            });
        }
    });

    // Open Masarra link when clicking card itself
    const masarraCard = document.getElementById('project1');
    if (masarraCard) {
        masarraCard.addEventListener('click', () => window.open('https://masarra.world/', '_blank'));
        masarraCard.style.cursor = 'pointer';
    }

    // *************   5   ****************
    // Contact form validation
    // ************************************
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    function showMessage(text, type) {
        formMessage.className = `form-message ${type}`;
        formMessage.textContent = text;
        formMessage.style.display = 'block';
        void formMessage.offsetWidth; // force reflow so transition triggers
        formMessage.classList.add('show');
    }

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name    = document.getElementById('name').value.trim();
            const email   = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!name || !email || !message) {
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


    // *************   6   ****************
    // Visitor Mode Selector
    // ************************************
    const visitorBtns       = document.querySelectorAll('.visitor-btn');
    const visitorBanner     = document.getElementById('visitorBanner');
    const visitorBannerText = document.getElementById('visitorBannerText');
    const bannerClose       = document.getElementById('bannerClose');

    const bannerMessages = {
        recruiter: "Welcome, Recruiter! I've highlighted my most relevant skills and real-world projects for you.",
        beginner:  "Hey there! I've surfaced beginner-friendly work so you can see how I approach learning.",
        developer: "Fellow dev! Check out my technical projects and core programming skills."
    };

    function applyVisitorMode(mode) {
        visitorBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === mode);
        });

        // Single consolidated loop for both card types
        ['skill-card', 'project-card'].forEach(cls => {
            document.querySelectorAll(`.${cls}`).forEach(card => {
                const attr  = cls === 'skill-card' ? 'skill' : 'project';
                const match = (card.dataset[attr] || '').split(' ').includes(mode);
                card.classList.toggle('highlighted', match);
                card.classList.toggle('dimmed', !match);
            });
        });

        if (visitorBannerText) visitorBannerText.textContent = bannerMessages[mode];
        if (visitorBanner)     visitorBanner.style.display = 'flex';
    }

    function resetVisitorMode() {
        if (visitorBanner) visitorBanner.style.display = 'none';
        visitorBtns.forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.skill-card, .project-card').forEach(card => {
            card.classList.remove('highlighted', 'dimmed');
        });
    }

    visitorBtns.forEach(btn => {
        btn.addEventListener('click', () => applyVisitorMode(btn.dataset.mode));
    });

    if (bannerClose) bannerClose.addEventListener('click', resetVisitorMode);

    // *************   7   ****************
    // Visitor Name State Management
    // ************************************
    const nameModalOverlay  = document.getElementById('nameModalOverlay');
    const visitorNameInput  = document.getElementById('visitorNameInput');
    const saveVisitorNameBtn = document.getElementById('saveVisitorName');

    function saveAndCloseName() {
        const entered = visitorNameInput ? visitorNameInput.value.trim() : '';
        if (entered) {
            localStorage.setItem('visitorName', entered);
        } else {
            sessionStorage.setItem('nameSkipped', 'true');
        }
        if (nameModalOverlay) nameModalOverlay.classList.add('hidden');
        updateGreeting();
    }

    const savedName = localStorage.getItem('visitorName');
    const skipped   = sessionStorage.getItem('nameSkipped');

    if (nameModalOverlay) {
        nameModalOverlay.classList.toggle('hidden', !!(savedName || skipped));
    }

    if (saveVisitorNameBtn) {
        saveVisitorNameBtn.addEventListener('click', saveAndCloseName);
    }

    if (visitorNameInput) {
        visitorNameInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') saveAndCloseName();
        });
    }

    if (nameModalOverlay) {
        nameModalOverlay.addEventListener('click', (e) => {
            if (e.target === nameModalOverlay) saveAndCloseName();
        });
    }

    void loadGitHubRepos();

});