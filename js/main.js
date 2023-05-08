import {fillPicturesList} from './gallery.js';
import './overlay_controller.js';
import {
  mainForm,
  applyEffectOnPreview,
  changePreviewScale,
  showOverlay,
  hideOverlay,
  hideOverlayAndResetForm,
  showOverlayWithImage
} from './overlay_controller.js';
import {sendFormDataToServer} from './server.js';
import {showErrorMessage, showSuccesMessage} from'./messages.js';

const pristine = new Pristine(mainForm, undefined, false);

const picturesList = document.querySelector('.pictures');
fillPicturesList(picturesList);

const uploadImageInput = document.querySelector('#upload-file');
const uploadCancelButton = document.querySelector('#upload-cancel');
const scaleControllerDecrease = document.querySelector('.scale__control--smaller');
const scaleControllerIncrease = document.querySelector('.scale__control--bigger');
const effectsList = document.querySelector('.effects__list');
const submitButton = document.querySelector('#upload-submit');

mainForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (pristine.validate()) {
    submitButton.disabled = true;
    sendFormDataToServer(new FormData(mainForm),
      (response) => {
        submitButton.disabled = false;
        if (!response.ok) {
          throw `Error. Response status: ${response.status}`;
        }
        hideOverlayAndResetForm();
        showSuccesMessage();
      },
      () => {
        submitButton.disabled = false;
        hideOverlay();
        showErrorMessage(() => {showOverlay();});
      });
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
  const imageFile = uploadImageInput.files[0];
  let url = null;
  if (imageFile) {
    url = URL.createObjectURL(imageFile);
  }
  showOverlayWithImage(url);

  const onCancelButtonClick = () => {
    hideOverlayAndResetForm();
    document.removeEventListener('keydown', onEsapeKeydown);
    uploadCancelButton.removeEventListener('click', onCancelButtonClick);
  };

  function onEsapeKeydown(evt) {
    if (evt.code === 'Escape') {
      onCancelButtonClick();
    }
  }

  document.addEventListener('keydown', onEsapeKeydown);
  uploadCancelButton.addEventListener('click', onCancelButtonClick);

});
