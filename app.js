// https://www.omnicalculator.com/conversion/ft-to-m

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const mRadio = document.getElementById('mRadio');
const ftRadio = document.getElementById('ftRadio');

let m;
let ft = v; 

// labels of the inpust
const variable = document.getElementById('variable');

mRadio.addEventListener('click', function() {
  variable.textContent = 'ft';
  ft = v;
  result.textContent = '';
});

ftRadio.addEventListener('click', function() {
  variable.textContent = 'm';
  m = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(mRadio.checked)
    result.textContent = `m = ${computem().toFixed(5)}`;

  else if(ftRadio.checked)
    result.textContent = `ft = ${computeft().toFixed(5)}`;
})

// calculation

function computem() {
  return Number(ft.value) / 3.281;
}

function computeft() {
  return Number(m.value) * 3.281;
}