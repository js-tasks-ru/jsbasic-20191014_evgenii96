/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(string) {
  let values = string.split(' ')
                      .join(',')
                      .split(',')
                      .map((item) => parseFloat(item))
                      .filter((item) => !isNaN(item))
                      .sort(function(a, b) {return a - b;});
  return {min: values[0], max: values[values.length - 1]};
}
