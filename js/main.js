/**
 * Получаем рандомное целое число из заданного диапазона,
 * включая границы диапазона.
 *
 * @param {number} from - начало диапазона
 * @param {number} to - конец диапазона
 * @returns {number}
 */
function getRandomNumber (a, b) {
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
function isStringCorrect (str, maxLength) {
  return str.length <= maxLength;
}

function createPhotoData(id, url, description, likes, comments) {
  return {
    id: id,
    url: url,
    description: description,
    likes: likes,
    comments: comments
  }
}

function generatePhotos() {
  let result = []
  const count = 25;
  for (let i = 0; i < count; i++) {
    result.push(
      createPhotoData(
        i,
        "photos/" + i + ".jpg",
        "Фото номер " + i,
        getRandomNumber(15, 200),
        getRandomNumber(0, 200)
      )
    );
  }
  return result;
}
