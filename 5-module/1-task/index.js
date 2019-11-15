'use strict';

console.clear();
/**
 * Метод устанавливает необходимые по условию атрибуты таблице
 * @param {Element} table
 */

function highlight(table) {
  let headCells = table.tHead.rows[0].cells;
  let statusColumn;
  let genderColumn;
  let ageColumn;

  for (let column = 0; column < headCells.length; column++) {
    if (headCells[column].innerText == 'Status') {
      statusColumn = column;
    }
    if (headCells[column].innerText == 'Gender') {
      genderColumn = column;
    }
    if (headCells[column].innerText == 'Age') {
      ageColumn = column;
    }
  }

  let rows = table.rows;

  for (let i = 1; i < rows.length; i++) {
    if (rows[i].cells[statusColumn].dataset.available == 'true') {
      rows[i].classList.add('available');
    } else if (rows[i].cells[statusColumn].dataset.available == 'false') {
      rows[i].classList.add('unavailable');
    } else {
      rows[i].setAttribute('hidden', 'hidden');
    }

    console.log(rows[i]);

    if (rows[i].cells[genderColumn].innerText == 'm') {
      rows[i].classList.add('male');
    } else if (rows[i].cells[genderColumn].innerText == 'f') {
      rows[i].classList.add('female');
    }

    if (+rows[i].cells[ageColumn].innerText < 18) {
      rows[i].style = 'text-decoration: line-through';
    }
  }
}
