let displayValue = '';

function showToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function deleteDigit() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}

document.addEventListener('keydown', function (event) {
  let key = event.key;

  switch (key) {
    case 'C':
      clearDisplay();
      break;
    case 'Delete':
      deleteDigit();
      break;
    case '=':
    case 'Enter':
      calculate();
      break;
    default:
      if (/[0-9+\-*/.]/.test(key)) {
        showToDisplay(key);
      }
  }
});