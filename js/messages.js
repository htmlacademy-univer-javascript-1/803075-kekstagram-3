export const showErrorMessage = (buttonClickListener = () => {}) => {
  const temple = document.querySelector('#error').content;
  const element = temple.querySelector('.error').cloneNode(true);

  // const title = element.querySelector('.error__title');
  const button = element.querySelector('.error__button');
  // title.textContent = titleText;
  // button.textContent = buttonText;

  addMessageEventListeners(element, button, buttonClickListener);
  document.body.appendChild(element);
};

export const showSuccesMessage = () => {
  const temple = document.querySelector('#success').content;
  const element = temple.querySelector('.success').cloneNode(true);

  const button = element.querySelector('.success__button');

  addMessageEventListeners(element, button, () => {element.remove();});
  document.body.appendChild(element);
};


function addMessageEventListeners(element, button, buttonClickListener) {

  function onButtonClick() {
    button.removeEventListener('click', onButtonClick);
    document.removeEventListener('keydown', onEsapeKeydown);
    document.removeEventListener('click', onOutsideClick);

    element.remove();
    buttonClickListener();
  }

  function onEsapeKeydown(evt) {
    if (evt.code === 'Escape') {
      onButtonClick();
    }
  }

  function onOutsideClick(evt) {
    if (evt.target === element) {
      onButtonClick();
    }
  }

  document.addEventListener('keydown', onEsapeKeydown);
  document.addEventListener('click', onOutsideClick);
  button.addEventListener('click', onButtonClick);
}
