export const commentMinLength = 20;
export const commentMaxLength = 140;
export const hashtagRegex = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

export const minScale = 25;
export const maxScale = 100;
export const scaleStep = 25;

export const errorMessages = {
  hashtag: {
    title: 'Неправильно написан хештег',
    button: 'Исправить'
  },
  comment: {
    title: 'Неправильно написан комментарий.',
    button: 'Исправить'
  },
  file: {
    title: 'Проблемы с файлом',
    button: 'Загрузить файл снова'
  },
  succes: {
    title: 'Все по-кайфу',
    button: 'Закрыть'
  }
};

export const effectsSettings = {
  'effect-none': {
    filterValue: null
  },
  'effect-chrome': {
    filterValue: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  'effect-sepia': {
    filterValue: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  'effect-marvin': {
    filterValue: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  'effect-phobos': {
    filterValue: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px'
  },
  'effect-heat': {
    filterValue: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
  },
};
