import {generatePhotos} from './data.js';

function createPictureElement(data, element) {


  const clone = element.cloneNode(true);

  const image = clone.querySelector('.picture__img');
  const likes = clone.querySelector('.picture__likes');
  const comments = clone.querySelector('.picture__comments');

  image.src = data.url;
  likes.textContent = data.likes;
  comments.textContent = data.comments;

  return clone;
}

export function fillPicturesList(container) {
  const temple = document.querySelector('#picture').content;
  const element = temple.querySelector('.picture');

  const pictures = generatePhotos();

  for (const picture of pictures) {
    const newPicture = createPictureElement(picture, element);
    container.appendChild(newPicture);
  }
}