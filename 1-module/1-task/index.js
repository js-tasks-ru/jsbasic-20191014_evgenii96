/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(m, n) {
  let result = m;
  for (let i = 1; i < n; i++) {
    result *= m;
  }
  return result;
}

let m = +prompt('Введите число:', '');
let n = +prompt('Введите натуральную степень:', '');

alert(pow(m, n));
