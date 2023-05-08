export const sendFormDataToServer = (formData, onSucces = () => {}, onError = () => {}) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body: formData
    })
    .then((response) => {onSucces(response);})
    .catch((reason) => {onError(reason);});
};

export const getGalleryFromServer = () => fetch('https://27.javascript.pages.academy/kekstagram-simple/data');
