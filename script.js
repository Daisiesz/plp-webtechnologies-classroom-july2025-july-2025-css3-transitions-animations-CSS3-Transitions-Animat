// --- Answer 2: JavaScript Functions — Scope, Parameters & Return Values ---

// Global variable example
let globalCounter = 0;

// Function with parameters and return value
function addNumbers(a, b) {
    // Local variable
    let sum = a + b;
    return sum;
}

// Function to update the button text and demonstrate DOM manipulation
function updateButtonText(newText) {
    const button = document.querySelector('.transition-button');
    if (button) {
        button.textContent = newText;
        return true;
    }
    return false;
}

// Function to increment the global counter and return its value
function incrementCounter() {
    globalCounter++;
    return globalCounter;
}

// Function to toggle a class on an element (can be reused for animation triggers)
function toggleClass(selector, className) {
    const element = document.querySelector(selector);
    if (element) {
        element.classList.toggle(className);
        return element.classList.contains(className);
    }
    return null;
}

// Example usage:
console.log('Sum:', addNumbers(5, 7)); // 12
console.log('Button updated:', updateButtonText('Clicked!'));
console.log('Counter:', incrementCounter());
console.log('Toggled:', toggleClass('.transition-button', 'active'));

// Demonstrate local vs global scope
function scopeDemo() {
    let localVar = 'I am local';
    console.log(localVar); // Accessible here
    console.log(globalCounter); // Accessible here (global)
}
scopeDemo();
// console.log(localVar); // Would cause an error (not accessible here)


