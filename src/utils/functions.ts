import {FilmImage} from './consts.ts';

export const getFormattedDate = (date: string): string =>
  new Date(date).toLocaleString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  });

export function GetSrcFilmImage(title: string, filmImage: FilmImage): string {
  let imgName = title.toLowerCase().replace(':', '').replace(/ /gi, '-');
  switch (filmImage) {
    case FilmImage.BgImage:
      imgName = `bg-${imgName}`;
      break;
    case FilmImage.Poster:
      imgName = `${imgName}-poster`;
      break;
    case FilmImage.SmallCard:
      break;
  }
  return `img/${imgName}.jpg`;
}
