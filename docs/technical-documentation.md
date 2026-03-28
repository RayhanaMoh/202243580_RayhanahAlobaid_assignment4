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