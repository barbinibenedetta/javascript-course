let calculation = JSON.parse(localStorage.getItem('calculation')) ||
'';

displayCalculation();

function updateCalculation(value) {
  calculation += value;
  console.log(calculation);
  localStorage.setItem('calculation', JSON.stringify(calculation));

  displayCalculation();
}

function displayCalculation() {
  document.querySelector('.js-display-calculation')
    .innerHTML = calculation;
}