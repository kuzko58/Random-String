const[input1, input2, genButton, outputBox] = [document.getElementById('input1'), document.getElementById('input2'), document.getElementById('genButton'), document.getElementById('outputBox')];
const letters = (() => {
  const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
  return caps;
})();

const numbers = [0,1,2,3,4,5,6,7,8,9];

const randomizer = (bank, n) => {
  let result = [];
  while(result.length < n) {
    let val = bank[Math.floor(Math.random() * bank.length)];
    if(!result.includes(val)) {
      result.push(val);
  }
  } 
  result = result.join('');
  return result;
};
const conCater = (arr) => {
  let result = '';
  arr.forEach( el => result += el);
  return result;
};

const inputCheck = (input) => {
  input.value = input.value.replace(/[^0-9]/g, '').slice(0, 2);
};

input1.addEventListener('input', () => {
inputCheck(input1);
});

input2.addEventListener('input', () => {
  inputCheck(input2);
  });

genButton.addEventListener('click', () => {
  let x = Number(input1.value);
  let y = Number(input2.value);
  if((x && y) && (x <= 26 && y <= 10)) {
  outputBox.innerHTML = conCater([randomizer(letters,x),randomizer(numbers,y)]);
  } else outputBox.innerHTML = 'invalid input';
});
