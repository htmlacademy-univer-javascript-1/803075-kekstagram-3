export const showError = (titleText, buttonText, buttonClickListener = () => {}) => {
  const temple = document.querySelector('#error').content;
  const element = temple.querySelector('.error').cloneNode(true);

  const title = element.querySelector('.error__title');
  const button = element.querySelector('.error__button');
  title.textContent = titleText;
  button.textContent = buttonText;

  button.addEventListener('click', () => {
    element.remove();
    buttonClickListener();
  });

  document.body.appendChild(element);
};

