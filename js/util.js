/**
 * Получаем рандомное целое число из заданного диапазона,
 * включая границы диапазона.
 *
 * @param {number} from - начало диапазона
 * @param {number} to - конец диапазона
 * @returns {number}
 */
export function getRandomNumber (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

/**
 * Проверяем, не превышает ли длина строки заданный предел
 *
 * @param {string} str - проверяемая строка
 * @param {number} maxLength - максимальная длина строки
 * @returns {boolean}
 */
export function isStringLengthWithinRange (str, min, max) {
  return str.length >= min && str.length <= max;
}
