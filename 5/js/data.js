import {getRandomNumber} from './util.js';

function createPhotoData(id, url, description, likes, comments) {
  return {
    id: id,
    url: url,
    description: description,
    likes: likes,
    comments: comments
  };
}

export function generatePhotos() {
  const result = [];
  const count = 25;
  for (let i = 1; i <= count; i++) {
    result.push(
      createPhotoData(
        i,
        `photos/${i}.jpg`,
        `Фото номер ${i}`,
        getRandomNumber(15, 200),
        getRandomNumber(0, 200)
      )
    );
  }
  return result;
}
