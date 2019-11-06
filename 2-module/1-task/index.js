/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
  let cloneObj = {};
  for (let key in obj) {
    if (obj[key] === null) {
      cloneObj[key] = null;
    } else if (typeof (obj[key]) === 'object') {
      cloneObj[key] = clone(obj[key]);
    } else {
      cloneObj[key] = obj[key];
    }
  }
  return cloneObj;
}

const obj = {
  prop: 1,
  anotherProp: 2,
  method () {
    alert(this.prop);
  },
  anotherObj: {},
};

cloneObj = clone(obj);

// console.log(cloneObj === obj);
// console.log(cloneObj.anotherObj === obj.anotherObj);
// alert(cloneObj.anotherObj);
// alert(obj.anotherObj);

