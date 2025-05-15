let display = document.getElementById('display');

function appendNumber(number) {
  if (display.innerText === '0') {
    display.innerText = number;
  } else {
    display.innerText += number;
  }
}

function appendOperator(operator) {
  const lastChar = display.innerText.slice(-1);
  if (!'+-*/'.includes(lastChar)) {
    display.innerText += operator;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function deleteLast() {
  if (display.innerText.length > 1) {
    display.innerText = display.innerText.slice(0, -1);
  } else {
    display.innerText = '0';
  }
}

function calculate() {
  try {
    let result = eval(display.innerText.replace(/×/g, '*').replace(/÷/g, '/'));
    display.innerText = result;
    
    // Adiciona classe para animação
    display.classList.add('update');
    
    // Remove a classe após a animação para poder repetir
    setTimeout(() => {
      display.classList.remove('update');
    }, 300);
    
  } catch {
    display.innerText = 'Erro';
  }
}
