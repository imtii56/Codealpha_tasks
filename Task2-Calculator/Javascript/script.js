
 let input = document.getElementById('input-field');
let buttons = document.querySelectorAll('button');

let string = '';
let evaluate = false;
const operators = ['+', '-', '*', '/', '%'];

// Centralized logic processor for both click and keyboard inputs
function handleInput(value) {
    // 1. Clear last character (DEL button / Backspace key)
    if (value === 'DEL' || value === 'Backspace') {
        string = string.substring(0, string.length - 1);
        input.value = string;
        evaluate = false;
        return;
    }

    // 2. Clear input field (AC button / Escape key)
    if (value === 'AC' || value === 'Escape') {
        string = '';
        input.value = string;
        evaluate = false;
        return;
    }

    // 3. Evaluate expression (= button / Enter key)
    if (value === '=' || value === 'Enter') {
        if (string === '') return;

        let lastChar = string.slice(-1);
        if (operators.includes(lastChar)) {
            string = string.slice(0, -1);
        }

        // Division by zero check
        if (/\/0(?!\d)/.test(string)) {
            input.value = "Error: Divide by 0";
            string = '';
            evaluate = false;
            return;
        }

        try {
            let result = eval(string);
            string = Number.isInteger(result)
                ? result.toString()
                : parseFloat(result.toFixed(8)).toString();
            input.value = string;
            evaluate = true;
        } catch (err) {
            input.value = "Error";
            string = '';
            evaluate = false;
        }
        return;
    }

    // 4. Handle state right after calculation
    if (evaluate) {
        if (!operators.includes(value)) {
            string = ''; // Clear string if starting with a new number
        }
        evaluate = false;
    }

    // 5. Input validation guards
    if (string === '' && operators.includes(value) && value !== '-') return;
    if (string === '' && value === '00') return;

    // Prevent multiple decimals in a single number block
    if (value === '.') {
        let block = string.split(/[\+\-\*\/%]/).pop();
        if (block.includes('.')) return;
    }

    let last = string.slice(-1);

    // Replace consecutive operators
    if (operators.includes(last) && operators.includes(value)) {
        string = string.slice(0, -1) + value;
    } 
    // Prevent useless leading zeros
    else if (last === '0' && value === '0' && (string.length === 1 || operators.includes(string[string.length - 2]))) {
        return;
    }
    // Replace leading zero with incoming digits
    else if (last === '0' && !operators.includes(value) && value !== '.' && (string.length === 1 || operators.includes(string[string.length - 2]))) {
        string = string.slice(0, -1) + value;
    } 
    // Append input digit or operator
    else {
        string += value;
    }

    input.value = string;
}

// 1. On-screen Button Click Listener
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        // .innerText.trim() ensures no extra spaces or HTML tags break the button match
        const val = e.currentTarget.innerText.trim();
        handleInput(val);
        e.currentTarget.blur(); // Remove focus outline so hitting Enter key won't re-trigger the clicked button
    });
});

// 2. Physical Keyboard Listener
document.addEventListener('keydown', (e) => {
    const key = e.key;

    // Filter and route valid calculator keys
    if (!isNaN(key) || operators.includes(key) || key === '.') {
        handleInput(key);
    } else if (key === 'Enter') {
        e.preventDefault(); // Prevents triggering accidental button double-clicks
        handleInput('=');
    } else if (key === 'Backspace') {
        handleInput('DEL');
    } else if (key === 'Escape') {
        handleInput('AC');
    }
});
