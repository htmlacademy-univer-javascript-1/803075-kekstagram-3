import './overlay_const.js';
import {
  MIN_SCALE,
  MAX_SCALE,
  SCALE_STEP,
  EFFECTS_SETTINGS
} from './overlay_const.js';

const slider = document.querySelector('.effect-level__slider');
const scaleControllerValue = document.querySelector('.scale__control--value');
const preview = document.querySelector('.img-upload__preview').querySelector('img');
const effectLevelValue = document.querySelector('.effect-level__value');
export const overlay = document.querySelector('.img-upload__overlay');
export const mainForm = document.querySelector('.img-upload__form');

const resetForm = () => {
  mainForm.reset();
  preview.classList = [];
  preview.style.filter = null;
  preview.style.transform = null;
  if (slider.noUiSlider) {
    slider.noUiSlider.destroy();
  }
};

const createSliderForEffect = (effectSettings) => {
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
};

export const applyEffectOnPreview = () => {
  const checkedRadio = document.querySelector('input[name="effect"]:checked');
  const effectClass = checkedRadio.parentElement.querySelector('.effects__preview').classList[1];
  preview.classList = [];
  preview.classList.add(effectClass);

  const effectSettings = EFFECTS_SETTINGS[checkedRadio.id];
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
};

export const changePreviewScale = (isIncrease) => {
  const currentValue = Math.floor(parseFloat(scaleControllerValue.value));
  let scale = currentValue;
  if (isIncrease) {
    if (currentValue >= MIN_SCALE && currentValue < MAX_SCALE) {
      scale = currentValue + SCALE_STEP;
    }
  } else {
    if (currentValue > MIN_SCALE && currentValue <= MAX_SCALE) {
      scale = currentValue - SCALE_STEP;
    }
  }
  scaleControllerValue.value = `${scale}%`;
  preview.style.transform = `scale(${scale/100})`;
};

export const showSuccesMessage = () => {
  const temple = document.querySelector('#success').content;
  const element = temple.querySelector('.success').cloneNode(true);

  const button = element.querySelector('.success__button');

  button.addEventListener('click', () => {element.remove();});

  document.body.appendChild(element);
};

export const showOverlay = () => {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

export const showOverlayWithImage = (imageUrl) => {
  preview.src = imageUrl;
  showOverlay();
};

export const hideOverlay = () => {
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

export const hideOverlayAndResetForm = () => {
  hideOverlay();
  resetForm();
};


