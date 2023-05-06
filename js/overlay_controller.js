import {isStringLengthWithinRange} from './util.js';
import './overlay_const.js';
import {
  commentMinLength,
  commentMaxLength,
  hashtagRegex,
  minScale,
  maxScale,
  scaleStep,
  errorMessages,
  effectsSettings
} from './overlay_const.js';

export const overlay = document.querySelector('.img-upload__overlay');
export const mainForm = document.querySelector('.img-upload__form');

const commentTextarea = document.querySelector('.text__description');
const hashtagTextarea = document.querySelector('.text__hashtags');
const slider = document.querySelector('.effect-level__slider');
const scaleControllerValue = document.querySelector('.scale__control--value');
const preview = document.querySelector('.img-upload__preview').querySelector('img');
const effectLevelValue = document.querySelector('.effect-level__value');

export function applyEffectOnPreview() {
  const checkedRadio = document.querySelector('input[name="effect"]:checked');
  const effectClass = checkedRadio.parentElement.querySelector('.effects__preview').classList[1];
  preview.classList = [];
  preview.classList.add(effectClass);

  const effectSettings = effectsSettings[checkedRadio.id];
  if (slider.noUiSlider) {
    slider.noUiSlider.destroy();
  }

  if (effectSettings.filterValue) {
    createSliderForEffect(effectSettings);
    slider.noUiSlider.on('update.effects', (value) => {
      const filterValue = `${effectSettings.filterValue}(${value}${effectSettings.unit})`;
      preview.style.filter = filterValue;
      effectLevelValue.value = value[0];
    });
  } else {
    preview.style.filter = null;
  }
}

export function showError(titleText, buttonText) {
  const temple = document.querySelector('#error').content;
  const element = temple.querySelector('.error').cloneNode(true);

  const title = element.querySelector('.error__title');
  const button = element.querySelector('.error__button');
  title.textContent = titleText;
  button.textContent = buttonText;

  button.addEventListener('click', () => {clickErrorButton(element);});

  document.body.appendChild(element);

}

export function changePreviewScale(isIncrease) {
  const currentValue = Math.floor(parseFloat(scaleControllerValue.value));
  let scale = currentValue;
  if (isIncrease) {
    if (currentValue >= minScale && currentValue < maxScale) {
      scale = currentValue + scaleStep;
    }
  } else {
    if (currentValue > minScale && currentValue <= maxScale) {
      scale = currentValue - scaleStep;
    }
  }
  scaleControllerValue.value = `${scale}%`;
  preview.style.transform = `scale(${scale/100})`;
}

export function getErrorMessage() {
  let message = 'succes';
  if (!isHashtagCorrect()) {message = 'hashtag';}
  else if (!isCommentCorrect()) {message = 'comment';}
  //часть про файл потом
  return errorMessages[message];
}

export function showOverlay() {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

export function hideOverlay() {
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  mainForm.reset();
}

export function isFormCorrect() {
  return isHashtagCorrect() && isCommentCorrect();
}

function clickErrorButton(error) {
  error.remove();
  overlay.classList.remove('hidden');
}

function createSliderForEffect(effectSettings) {
  noUiSlider.create(slider, {
    start: effectSettings.max,
    connect: 'lower',
    range: {
      'min': effectSettings.min,
      'max': effectSettings.max
    },
    step: effectSettings.step,
    tooltips: {
      to: function(numericValue) {
        return `${numericValue.toFixed(1)}${effectSettings.unit}`;
      }
    }
  });
}

function isCommentCorrect() {
  const comment = commentTextarea.value;
  return isStringLengthWithinRange(comment, commentMinLength, commentMaxLength);
}

function isHashtagCorrect() {
  const hashtag = hashtagTextarea.value;
  return hashtagRegex.test(hashtag);
}
