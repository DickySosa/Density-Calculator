// Import stylesheets
import './style.css';

//Density calculation values
let densityCalculationMass = document.querySelector(
  '.density-calculation-mass');
let densityCalculationVolumen = document.querySelector(
  '.density-calculation-volumen');
let densityButton = document.querySelector('.density-button');
let densityResult = document.querySelector('.density-result');

function density() {
  let result = densityCalculationMass.value / densityCalculationVolumen.value;
  densityResult.innerHTML = result + ' g/ml';
}
densityButton.addEventListener('click', density);

//Mass calculation values
let massCalculationDensity = document.querySelector(
  '.mass-calculation-density'
);
let massCalculationVolumen = document.querySelector(
  '.mass-calculation-volumen'
);
let massButton = document.querySelector('.mass-button');
let massResult = document.querySelector('.mass-result');

function mass() {
  let result = massCalculationDensity.value * massCalculationVolumen.value
  massResult.innerHTML = result + ' g';
}
massButton.addEventListener('click', mass);


//Volumen calculation values

let volumenCalculationMass = document.querySelector('.volumen-calculation-mass')
let volumenCalculationDensity = document.querySelector('.volumen-calculation-density')

let volumenButton = document.querySelector('.volumen-button')
let volumenResult = document.querySelector('.volumen-result')

function volumen(){
  let result = volumenCalculationMass.value / volumenCalculationDensity.value
  volumenResult.innerHTML = result + ' ml';
}
volumenButton.addEventListener('click', volumen)