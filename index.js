const [input1, input2, input3, genButton, outputBox] = [document.getElementById('input1'), document.getElementById('input2'), document.getElementById('input3'), document.getElementById('genButton'), document.getElementById('outputBox')];
const letters = (() => {
  const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
  return caps;
})();

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const randomizer = (bank, n) => {
  let result = [];
  while (result.length < n) {
    let val = bank[Math.floor(Math.random() * bank.length)];
    if (!result.includes(val)) {
      result.push(val);
    }
  }
  return result;
};
const conCater = (arr) => {
  const arr1 = arr[0];
  const arr2 = arr[1];
  let result = '';
  if(arr1.length >= arr2.length) {
    result = arr1;
    let pos = Math.floor(arr1.length / arr2.length);
    let i = pos;
    for (let el of arr2) {
      result.splice(i, 0, el);
      i += pos + 1;
    }
    result = result.join('');
  }
  else result = arr2.join('').concat(arr1.join(''));
  return result;
};

const looper = (a, b, n) => {
  let result = [];
  if(!n || n < 1) n = 1;
  for (i = 0; i < n; i++) {
    let el = conCater([randomizer(letters, a), randomizer(numbers, b)]);
    result.push(el);
  }
  return result;
};

const inputCheck = (input) => {
  input.value = input.value.replace(/^0+|\D/g, '').slice(0, 2);
};

input1.addEventListener('input', () => {
  inputCheck(input1);
  if(Number(input1.value) > 26) input1.value = 26;
});

input2.addEventListener('input', () => {
  inputCheck(input2);
  if(Number(input2.value) > 9) input2.value = 9;
});

input3.addEventListener('input', () => {
  inputCheck(input3);
  if(Number(input3.value) > 50) input3.value = 50;
});

genButton.addEventListener('click', () => {
  const x = Number(input1.value);
  const y = Number(input2.value);
  const z = Number(input3.value);
  if (x && y) {
    const table = document.createElement('table');
    let tableRow = document.createElement('tr');
    let tHead1 = document.createElement('th');
    let tHead2 = document.createElement('th');
    tHead1.appendChild(document.createTextNode('S/N'));
    tHead2.appendChild(document.createTextNode('KEY'));
    tableRow.appendChild(tHead1);
    tableRow.appendChild(tHead2);
    table.appendChild(tableRow);
    table.classList.add('output-table');
    let tableData = looper(x, y, z);
    tableData.forEach((el) => {
      let tRow = document.createElement('tr');
      tdata1 = document.createElement('td');
      tdata2 = document.createElement('td');
      tdata1.classList.add('table-data-one');
      tdata2.classList.add('table-data-two');
      tdata1.appendChild(document.createTextNode(tableData.indexOf(el) + 1));
      tdata2.appendChild(document.createTextNode(el));
      tRow.appendChild(tdata1);
      tRow.appendChild(tdata2);
      table.appendChild(tRow);
    });
    outputBox.appendChild(table);
  } else outputBox.innerHTML = 'invalid input';
});