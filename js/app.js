import { calculatePrice } from './logic.js';

document.getElementById('calcBtn').addEventListener('click', () => {
  const ageInput = document.getElementById('age');
  const resultLabel = document.getElementById('result');

  const age = parseInt(ageInput.value, 10);

  if (isNaN(age) || age < 0) {
    resultLabel.textContent = '正しい年齢を入力してください';
    return;
  }

  const price = calculatePrice(age);
  resultLabel.textContent = `料金：${price}円`;
});