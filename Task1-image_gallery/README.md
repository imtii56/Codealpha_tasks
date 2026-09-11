# Interactive Visual Gallery

A modern, responsive, and feature-rich interactive image gallery built with HTML, CSS, JavaScript, and tsParticles. This application features category filtering, smooth modal transitions, keyboard-accessible navigation, and interactive dynamic particle effects.

---

### Features

* **Category Filtering:** Filter image items seamlessly across Nature, Food, Pets, and Arts with real-time UI updates.
* **Interactive Lightbox Modal:** Full-screen viewer supporting smooth image previewing with captions.
* **Smart Navigation:** Cycle through active category items using on-screen controls or keyboard shortcuts (`Left Arrow`, `Right Arrow`, `Escape`).
* **Dynamic Background:** Integrated `tsParticles` engine creating an interactive particle canvas background.
* **Responsive Layout:** CSS Grid and Flexbox implementation optimized across mobile, tablet, and desktop viewports.

---

### Tech Stack

* **HTML5:** Semantic layout structure and accessibility standard markup.
* **CSS3:** Custom properties (CSS variables), CSS Grid, Flexbox, dynamic blurs, and keyframe transitions.
* **JavaScript (ES6+):** Dynamic DOM manipulation, conditional filtering state, and event listening.
* **tsParticles Slim (v2.12.0):** Canvas-based particle background integration.

---

### Key-Binding Shortcuts

| Key | Action |
| :--- | :--- |
| `←` (Left Arrow) | Display previous visible item in lightbox |
| `→` (Right Arrow) | Display next visible item in lightbox |
| `Esc` (Escape) | Exit lightbox modal view |

---

### Project Structure

```text
├── assets/             # Local image assets
├── css/
│   └── gallery.css     # Main stylesheet and design system
├── index.html          # Main HTML structure and JavaScript logic
└── README.md           # Project documentation

1.GET STARTED
Bash
git clone https://github.com/imtii56/Codealpha_tasks.git
Navigate to the directory:
Bash
cd CodeAlpha_tasks/Task1-image_gallery
2.Open the Project
Open index.html directly in any web browser, or serve it using standard extensions like VS Code's Live Server.