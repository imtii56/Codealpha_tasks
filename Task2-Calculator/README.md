# Modern Glassmorphic Calculator

A sleek, responsive web calculator built with vanilla HTML, CSS, and JavaScript. Features a glassmorphism-inspired interface, robust input validation, and physical keyboard support.

## Features

- **Responsive Glassmorphism UI**: Uses modern CSS gradients, soft shadows, and dynamic hover effects that adjust seamlessly across mobile and desktop screens.
- **Full Keyboard Support**: Supports standard physical keyboard and numpad inputs (`0-9`, `+`, `-`, `*`, `/`, `%`, `Enter`, `Backspace`, `Escape`).
- **Result Chaining**: Continue calculations directly using previous answers when pressing an operator.
- **Edge-Case Logic & Validation**:
  - Prevents division by zero with custom error messaging (`Error: Divide by 0`).
  - Guards against multiple consecutive operators and trailing operators.
  - Prevents multiple decimal points within a single number block.
  - Fixes leading zero issues (`00` and useless `0` sequences).
  - Truncates long floats up to 8 decimal places for precise output.

## Technologies Used

- **HTML5**: Semantic element structure and accessibility styling.
- **CSS3**: CSS Grid/Flexbox, `backdrop-filter`, media queries, and keyframe animations.
- **JavaScript (ES6+)**: Event handling, DOM manipulation, state tracking, and Regex-based validation.

## How to Run

1. Clone or download the repository:
   ```bash
   Bash
git clone https://github.com/imtii56/Codealpha_tasks.git
Navigate to the directory:
Bash
cd CodeAlpha_tasks/Task2-Calculator
2. Open index.html directly in your browser or run it using VS Code's Live Server extension.