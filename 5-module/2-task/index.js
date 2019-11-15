/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {
  /**
   * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
   */
  items.unshift({
    name: 'Name',
    age: 'Age',
    salary: 'Salary',
    city: 'City',
  });
  this.el = document.createElement('table');

  this.el.classList.add('result__sorted-table');

  let makeHtmlRows = function (row) {
    let htmlRow = '<tr class="result__table-row">';
    for (let cell in row) {
      htmlRow = htmlRow + `<td class="result__table-cell">${row[cell]}</td>`;
    }
    return htmlRow + '</tr>';
  };

  let arrayOfHtmlRows = items.map((row) => makeHtmlRows(row));

  this.el.insertAdjacentHTML('afterBegin', '<thead class="result__table-head">');
  this.el.insertAdjacentHTML('beforeEnd', arrayOfHtmlRows);

  this.el.lastElementChild.classList.add('result__table-body');

  this.el.querySelector('.result__table-head').prepend(this.el.querySelector('.result__table-row'));

  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
  this.sort = (column, desc = false) => {
    let a = 1;
    if (desc) {
      a = -1;
    }

    let sortedRows = Array.from(this.el.rows)
      .slice(1)
      .sort((rowA, rowB) => rowA.cells[column].innerHTML > rowB.cells[column].innerHTML ? a : -a);

    this.el.querySelector('.result__table-body').prepend(...sortedRows);
  };
}
