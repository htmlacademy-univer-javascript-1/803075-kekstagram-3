import { getGalleryFromServer } from './server.js';
import { showErrorMessage } from './messages.js';

const createPictureElement = (data, element) => {
  const clone = element.cloneNode(true);
  const image = clone.querySelector('.picture__img');
  const likes = clone.querySelector('.picture__likes');
  const comments = clone.querySelector('.picture__comments');

  image.src = data.url;
  likes.textContent = data.likes;
  comments.textContent = data.comments;

  return clone;
};

export const fillPicturesList =  (container) => {
  const temple = document.querySelector('#picture').content;
  const element = temple.querySelector('.picture');

  const galleryResponse = getGalleryFromServer();

  galleryResponse
    .then(
      (response) => {
        if (!response.ok) {
          throw `Error. Response status: ${response.status}`;
        }
        response.json().then(
          (pictures) => {
            pictures.forEach((picture) => {
              const newPicture = createPictureElement(picture, element);
              container.appendChild(newPicture);
            });
          }
        );
      }
    )
    .catch(() => showErrorMessage());
};

