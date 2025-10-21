document.addEventListener('DOMContentLoaded', () => {
  const btnEl = document.getElementById('btn');
  const inputEl = document.getElementById('bmi-result');
  const weightConditionEl = document.getElementById('weight-condition');

  function calculateBMI() {
    const heightValue = parseFloat(document.getElementById('height').value);
    const weightValue = parseFloat(document.getElementById('weight').value);

    // convert cm to meters
    const heightMeters = heightValue / 100;
    const bmiValue = weightValue / (heightMeters * heightMeters);

    if (inputEl) inputEl.value = bmiValue.toFixed(2);

    
    if (bmiValue < 18.5) weightConditionEl.innerText  = 'Underweight';
    else if (bmiValue < 25) weightConditionEl.innerText  = 'Normal 😊';
    else if (bmiValue < 30) weightConditionEl.innerText  = 'Overweight 😐';
    else weightConditionEl.innerText  = 'Obese 😟';

    
  }

  btnEl.addEventListener('click', calculateBMI);
});
