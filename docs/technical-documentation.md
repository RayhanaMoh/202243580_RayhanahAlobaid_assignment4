# Technical Documentation
This document explains **how the site is built**, and **what the code structure looks like** so the reviewer can understand and extend the project quickly


# How is it built
Technical choices:
- **HTML** for semantic structure of sections
- **CSS** (Flexbox + Grid + CSS variables) for layout, spacing, and theming
- **JavaScript** for small interactions:
  - the greeting/**time-based**
  - Smooth scrolling navigation 
  - Expand/collapse project cards 
  - Button interactions (GitHub, CV)
  - Contact form validation with feedback messages
  - **GitHub REST API** is used to fetch public repository data for the authenticated user without requiring an API key, limited to 6 results sorted by most recently updated.


**Structure:**
```
assignment-1/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
│   └── Files/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore
```
## File roles
- **README.md** — Project overview, local setup instructions and usage quidance
- **index.html** — All page sections and their semantic structure. includes links to `style.css` and `script.js`
- **css/style.css** — Theme variables, base styles (colors & spacing), section layouts, and grids/flex rules
- **js/script.js** — Handles all interactivity, including: 
  - Time-based greeting message
  - Smooth scrolling for navigation links
  - Expand/collapse functionality for project cards
  - Button interactions for GitHub and CV links
  - Client-side validation for the contact form with user feedback
- **assets/** — images and files used in the website
- **docs/** — Written documentation: AI usage report and technical document
- **.gitignore** — Ignore node_modules, build artifacts, and IDE config files (if any) to keep the repo clean
> **Note:** No build tooling is used (no bundlers, frameworks, or package installs) to keep the project simple and easy to run locally by opening `index.html` directly in a browser

## Limitations
- The contact form is purely client-side and does not actually send data anywhere (no backend integration).
- No database or persistent storage
- The project focuses on frontend development and does not include any server-side code or APIs.

## Features with Code & Explanation

### 1. Dynamic Greeting + Live Clock

```js
function updateGreeting() {
  const now = new Date();
  const hour = now.getHours();

  let message = '';
  if (hour >= 5 && hour < 12) message = 'Good Morning';
  else if (hour < 18) message = 'Good Afternoon';
  else message = 'Good Evening';

  document.getElementById('greeting').innerText = message;
}
```

**What it does:**

* Detects current time
* Updates greeting dynamically
* Runs every second using `setInterval`

---

### 2. Smooth Scrolling Navigation

```js
function setupScroll(linkId, sectionId) {
  document.getElementById(linkId)
    .addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById(sectionId)
        .scrollIntoView({ behavior: 'smooth' });
    });
}
```

**What it does:**

* Prevents default jump behavior
* Scrolls smoothly to target section

---

### 3. Expandable Project Cards

```js
document.querySelectorAll('.collapsible-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});
```

**What it does:**

* Toggles extra content visibility
* Improves readability of project descriptions

---

### 4. Contact Form Validation

```js
if (!emailPattern.test(email)) {
  showMessage('Invalid email', 'error');
  return;
}
```

**What it does:**

* Validates inputs before submission
* Prevents empty or incorrect data
* Displays feedback instantly

---

### 5. GitHub API Integration

```js
const res = await fetch('https://api.github.com/users/USERNAME/repos');
const repos = await res.json();
```

**What it does:**

* Fetches live repositories
* Updates UI dynamically
* Handles loading & error states

---

### 6. Visitor Mode Personalization

```js
card.classList.toggle('highlighted', match);
card.classList.toggle('dimmed', !match);
```

**What it does:**

* Highlights relevant content
* Dims irrelevant items
* Creates tailored experience per user type

---

### 7. Local Storage (Visitor Name)

```js
localStorage.setItem('visitorName', entered);
```

**What it does:**

* Saves user name
* Personalizes greeting across sessions

---

### 8. External Links Handling

```js
window.open('https://github.com/yourprofile', '_blank');
```

**What it does:**

* Opens links in new tab
* Keeps portfolio session active

---

## Testing Functionality

### 1. Manual Testing

* Navigate through all sections → verify smooth scrolling
* Click project cards → ensure expand/collapse works
* Submit contact form:

    * Empty fields → error
    * Invalid email → error
    * Valid input → success message

### 2. API Testing

* Disconnect internet → check error state
* Change GitHub username → verify dynamic updates

### 3. Local Storage Testing

```js
localStorage.getItem('visitorName');
```

* Refresh page → name should persist
* Clear storage → modal should reappear

### 4. UI/UX Testing

* Resize screen (mobile/tablet/desktop)
* Verify responsiveness and layout stability

### 5. Edge Cases

* Very long input in form
* No repositories returned
* Rapid clicking on UI elements

---

## Notes

* Fully client-side (no backend)
* Focused on performance and simplicity
* Easily extendable (React / backend integration)
