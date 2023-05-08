export const sendFormDataToServer = (formData, succesCallback = () => {}, errorCallback = () => {}) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body: formData
    })
    .then((response) => {succesCallback(response);})
    .catch((reason) => {errorCallback(reason);});
};

export const getGalleryFromServer = () => fetch('https://27.javascript.pages.academy/kekstagram-simple/data');
