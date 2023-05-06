import {fillPicturesList} from './gallery.js';
import './overlay_controller.js';
import {
  overlay,
  mainForm,
  isFormCorrect,
  getErrorMessage,
  showError,
  applyEffectOnPreview,
  changePreviewScale,
  showOverlay,
  hideOverlay
} from './overlay_controller.js';

const picturesList = document.querySelector('.pictures');
fillPicturesList(picturesList);

const uploadImageInput = document.querySelector('#upload-file');
const uploadCancelButton = document.querySelector('#upload-cancel');
const scaleControllerDecrease = document.querySelector('.scale__control--smaller');
const scaleControllerIncrease = document.querySelector('.scale__control--bigger');
const effectsList = document.querySelector('.effects__list');


mainForm.addEventListener('submit', (evt) => {
  if (!isFormCorrect()) {
    evt.preventDefault();
    const message = getErrorMessage();
    showError(message.title, message.button);
    overlay.classList.add('hidden');
  }
});

effectsList.addEventListener('click', () => {
  applyEffectOnPreview();
});

scaleControllerDecrease.addEventListener('click', () => {
  changePreviewScale(false);
});

scaleControllerIncrease.addEventListener('click', () => {
  changePreviewScale(true);
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
