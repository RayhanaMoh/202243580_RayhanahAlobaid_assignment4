# Assignment 4 - Personal Portfolio
A responsive, interactive personal portfolio built with HTML, CSS, and JavaScript. The site presents a dynamic overview of my background, projects, skills, and contact information — with live GitHub integration and personalized visitor experience.

## Project Description
This portfolio showcases my understanding of web development concepts in a clean, modern layout:

- **Navigation bar** with smooth-scroll links to all sections of the page, including a real-time clock greeting personalized with the visitor's name
- **Intro** with interactive buttons to navigate to my CV and GitHub profile, a visitor type selector (Recruiter / Beginner / Developer) that filters relevant skills and projects, and a welcome modal that stores the visitor's name
- **About** section with a brief bio and profile image
- **Skills** section with progress bars and visitor-mode filtering that highlights relevant skills
- **GitHub Repos** section that fetches and displays live public repositories directly from the GitHub API, with language tags and last-updated dates
- **Projects** grid with real-world and academic projects, each with a "...Show More" toggle to expand descriptions, and visitor-mode dimming for less relevant entries
- **Contact** section with a fully client-side validated form (checks for empty fields, valid email format, and minimum message length)
- **Visitor Name State** that remembers the visitor's name across sessions using localStorage and displays it in the greeting
- **Used technologies:** HTML, CSS, and JavaScript (no frameworks or libraries)

**Structure:**
```
README.md
index.html
css/
  style.css
js/
  script.js
assets/
  images/
  Files/
docs/
  ai-usage-report.md      
  technical-documentation.md 
```

## Features Summary

| Feature | Technology Used |
|---|---|
| Real-time greeting with visitor name | JavaScript, localStorage |
| Visitor role selector with card filtering | JavaScript, data attributes |
| Live GitHub repositories | GitHub REST API, fetch |
| Expand / collapse project cards | JavaScript, CSS transitions |
| Contact form validation | JavaScript (regex, conditionals) |
| Responsive layout | CSS Grid, Flexbox, clamp() |
| Smooth scrolling | JavaScript, scrollIntoView |
| Performance optimizations | will-change, preconnect, meta tags |

## Setup instructions
To run the project locally, follow these steps:
1. Clone the repository.
2. Open any code editor (e.g., WebStorm, VS Code) and navigate to the project directory.
3. Right click on `index.html` and select "Open in Browser" to view the portfolio.
> **Note:** The GitHub Repos section requires an internet connection to fetch live data from the GitHub API.

## How to use
- **Navigation:** Click any nav link to smoothly scroll to that section. The header greeting updates every second and shows your name once entered.
- **Visitor Name:** On first visit, a welcome modal asks for your name. It is saved in `localStorage` and displayed in the greeting on all future visits. Click "Not you?" in the header to reset it.
- **Visitor Mode:** In the Intro section, select your role (Recruiter, Beginner, or Developer) to highlight the most relevant skills and projects for you. A personalized banner appears with a tailored message. Click ✕ to reset.
- **GitHub Repos:** The Repos section automatically fetches your 6 most recently updated public repositories from GitHub and displays them as clickable cards with language and last-updated info. A user-friendly error message appears if the API fails.
- **Projects:** Click "...Show More" to expand a project's description. Click "Show Less" to collapse it. Clicking the Masarra card opens the live store in a new tab.
- **Contact Form:** Fill out all fields and click "Send Message" to see validation in action. The form checks for empty fields, a valid email format, and a minimum message length of 10 characters. Note: the form does not actually send data anywhere.

## Short summary of AI use
>Note: A detailed AI usage report is available in `docs/ai-usage-report.md`

### I mainly used AI to:
- Adjust the layout and improve the documentation (this file), color scheme, responsive behavior and implement time-based functionalities. 

