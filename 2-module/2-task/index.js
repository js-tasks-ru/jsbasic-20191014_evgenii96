/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

let obj1 = {};
let obj2 = { prop: null };

alert(isEmpty(obj1));
alert(isEmpty(obj2));
