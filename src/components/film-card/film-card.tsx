import {Film} from '../../types/films';
import {FilmImage, hoverFilmCardTime} from '../../utils/consts.ts';
import {Link} from 'react-router-dom';
import './film-card.css';
import {VideoPlayer} from '../video-player/video-player.tsx';
import {getGenreFilms} from '../../store/actions.ts';
import {useAppDispatch} from '../hooks/hooks.ts';
import {useEffect, useState} from 'react';
import {GetSrcFilmImage} from '../../utils/functions.ts';

type FilmCardProps = {
  film: Film;
};

export function FilmCard({ film }: FilmCardProps): JSX.Element {
  const [needPlayVideo, setNeedPlayVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    let isMouseLeave = false;
    if (needPlayVideo) {
      setTimeout(() => {
        if (!isMouseLeave) {
          setIsPlaying(true);
        }
      }, hoverFilmCardTime);
    }
    return () => {
      isMouseLeave = true;
    };
  }, [needPlayVideo]);

  const handleMouseEnter = () => {
    setNeedPlayVideo(true);
  };
  const handleMouseLeave = () => {
    setNeedPlayVideo(false);
    setIsPlaying(false);
  };
  return (
    <Link
      className="small-film-card__link small-film-card catalog__films-card"
      to={`/films/${film.id}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        dispatch(getGenreFilms({ genre: film.genre }));
      }}
    >
      <VideoPlayer
        src={film.trailer}
        poster={GetSrcFilmImage(film.title, FilmImage.SmallCard)}
        muted
        isPlaying={isPlaying}
      />
      {!isPlaying && <h3 className="small-film-card__title">{film.title}</h3>}
    </Link>
  );
}
