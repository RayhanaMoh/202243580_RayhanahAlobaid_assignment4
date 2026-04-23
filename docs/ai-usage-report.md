# AI usage report
> This report explains how AI was used while building and refining this portfolio.

--- 

## 1- Tools Used & Use Cases
During this project, I used AI for the following purposes:
- **Gemini**: I asked AI for suggestions on CSS properties for layouts, choosing proper colors for appealing look.
- **ChatGPT**: Utilized for quick explanations of technical concepts, such as the difference between properties.
- **GitHub Copilot**: Employed for real-time code completion within WebStorm and error correctios.

## 2. Features Implemented with AI Assistance
**Real-time greeting with visitor name** — A time-based greeting (Good Morning, Good Afternoon, etc.) that updates every second and displays the visitor's saved name from localStorage. 
**Visitor Mode Selector** — Three role buttons (Recruiter, Beginner, Developer) that filter skill cards and project cards using data attributes. Matched cards are highlighted with a green glow; unmatched cards are dimmed and made non-interactive.
**GitHub API Integration** — A section that fetches the 6 most recently updated public repositories from the GitHub API using the Fetch API.
**Expand / Collapse Project Cards** — Each project card has a "...Show More" toggle that reveals additional description text. Clicking again collapses it back to "Show Less".
**Performance Optimizations** — Consolidated repeated CSS patterns into shared rules. Refactored JavaScript to eliminate duplicated loops using a unified card filter function and a reusable `resetVisitorMode()` function.

---

## 3- Benifits & Challanges
### 3.1 Benifits:
- **Theming:** AI helped me in suggesting different themes and color pallates which facilated designing the web.
- **Advanced Features:** I wsa able to implement dynamic time-based greeting, smooth scrolling, collapsible project cards, external navigation buttons and form validation.
- **Resovling Errors:** ChatGPT helped me debugging the errors and resolve them eaily.
- **Outline:** Helped outline the documentation structure.
- **Code Completion:** GitHub Copilot provided real-time code suggestions, which sped up the coding process and helped me discover new approaches to implement features.

### 3.2 Challanges:
- **Confusion:** AI would suggest different code that conflict with my current code, requiring manual intervention to ensure consistency. 
- **Scaling:** AI generated clamp() values are unrealistic and needs re-scaling many times to get the right size.


# 4- Learning Outcomes
Through using AI tools in this project, I gained several skills and improvements in my workflow:
- **Improved JavaScript understanding:** I better understood DOM manipulation, event handling, and working with APIs.
- **API integration:** I gained experience using fetch with async/await to work with external data (GitHub API).
- **Debugging skills:** I improved my ability to identify and fix errors instead of only copying solutions.
- **Code optimization:** I learned how to reduce repetition and write cleaner, more reusable code.
- **Workflow efficiency:** AI helped speed up development, but also taught me the importance of reviewing and testing all generated code.

## 5- Responsive Use & Modificatoins:
Regardless of the given code/suggestion/modification by AI, I managed to do the following:
- **Manual Review:** Every line provided by AI was reviewed and tested within Webstorm's environment before being integrated in the web.
- **Customization:** I modified generic AI code to match my specific needs and preferences.
- **Understanding Before Use:** Ensuring I understood the logic behind the code rather than directly copying it.
- **Testing:** I thoroughly tested the AI-generated code to identify and fix any issues or inconsistencies, ensuring that the final product was polished and functional.

