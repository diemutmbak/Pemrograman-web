function appendCharacter(char) {
  const display = document.querySelector('input[name="display"]');
  display.value += char;
}

function clearDisplay() {
  const display = document.querySelector('input[name="display"]');
  display.value = '';
}

function backspace() {
  const display = document.querySelector('input[name="display"]');
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  const display = document.querySelector('input[name="display"]');
  try {
      display.value = eval(display.value);
  } catch (error) {
      display.value = 'Error';
  }
}