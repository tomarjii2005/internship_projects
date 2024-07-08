// Get the calculator container element
const calculator = document.getElementById('calculator');
 
// Get the display element
const display = document.createElement('input');
display.setAttribute('type', 'text');
display.setAttribute('readonly', 'readonly');
calculator.appendChild(display);
 
// Add event listener to handle button clicks
calculator.addEventListener('click', (event) => {
  const button = event.target;
  if (button.matches('button')) {
    const value = button.textContent;
    if (value === '=') {
      calculate();
    } else if (value === 'C') {
      clearDisplay();
    } else {
      updateDisplay(value);
    }
  }
});
 
// Function to update the display
function updateDisplay(value) {
  display.value += value;
}
 
// Function to clear the display
function clearDisplay() {
  display.value = '';
}
 
// Function to perform the calculation
function calculate() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}