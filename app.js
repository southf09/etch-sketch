const container = document.querySelector('.container');
const button = document.querySelector('.clear');
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < rows * cols; i++) {
    let newDiv = document.createElement('div');
    // newDiv.innerText = i + 1;
    container.appendChild(newDiv).className = 'grid-item';
  }
}

makeRows(16, 16);

const childItem = document.querySelectorAll('.grid-item');
for (let child of childItem) {
  child.addEventListener('mouseover', function () {
    child.classList.add('color');
  });
}
