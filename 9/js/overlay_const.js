export const MIN_SCALE = 25;
export const MAX_SCALE = 100;
export const SCALE_STEP = 25;

export const EFFECTS_SETTINGS = {
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
