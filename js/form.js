import {isStringLengthWithinRange} from './util.js';

const commentMinLength = 20;
const commentMaxLength = 140;
const hashtagRegex = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const errorMessages = {
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

const overlay = document.querySelector('.img-upload__overlay');
const uploadImageInput = document.querySelector('#upload-file');
const uploadCancelButton = document.querySelector('#upload-cancel');
const mainForm = document.querySelector('.img-upload__form');
const commentTextarea = document.querySelector('.text__description');
const hashtagTextarea = document.querySelector('.text__hashtags');

mainForm.addEventListener('submit', (evt) => {
  if (!isFormCorrect()) {
    evt.preventDefault();
    const message = getErrorMessage();
    showError(message.title, message.button);
    overlay.classList.add('hidden');
  }
});

uploadImageInput.addEventListener('change', () => {
  showOverlay();
});

uploadCancelButton.addEventListener('click', () => {
  hideOverlay();
});

document.addEventListener('keydown', (evt) => {
  if (evt.code === 'Escape') {
    hideOverlay();
  }
});


function showError(titleText, buttonText) {
  const temple = document.querySelector('#error').content;
  const element = temple.querySelector('.error').cloneNode(true);

  const title = element.querySelector('.error__title');
  const button = element.querySelector('.error__button');
  title.textContent = titleText;
  button.textContent = buttonText;

  button.addEventListener('click', () => {
    element.remove();
    overlay.classList.remove('hidden');
  });

  document.body.appendChild(element);

}

function getErrorMessage() {
  let message = 'succes';
  if (!isHashtagCorrect()) {message = 'hashtag';}
  else if (!isCommentCorrect()) {message = 'comment';}
  //часть про файл потом
  return errorMessages[message];
}

function showOverlay() {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

function hideOverlay() {
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  mainForm.reset();
}

function isHashtagCorrect() {
  const hashtag = hashtagTextarea.value;
  return hashtagRegex.test(hashtag);
}

function isCommentCorrect() {
  const comment = commentTextarea.value;
  return isStringLengthWithinRange(comment, commentMinLength, commentMaxLength);
}

function isFormCorrect() {
  return isHashtagCorrect() && isCommentCorrect();
}
