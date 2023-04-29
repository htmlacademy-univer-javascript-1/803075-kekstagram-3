/**
 * Получаем рандомное целое число из заданного диапазона,
 * включая границы диапазона.
 *
 * @param {number} from - начало диапазона
 * @param {number} to - конец диапазона
 * @returns {number}
 */
let randomNumber = function (from, to) {
  if (from > to) {
    return -1;
  }
  if (from == to) {
    return from;
  }
  let rand = from + Math.random() * (to + 1 - from);
  return Math.floor(rand);
}

/**
 * Проверяем, не превышает ли длина строки заданный предел
 *
 * @param {string} str - проверяемая строка
 * @param {number} maxLength - максимальная длина строки
 * @returns {boolean}
 */
let isStringCorrect = function(str, maxLength) {
  return str.length <= maxLength;
}
