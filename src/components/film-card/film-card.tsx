import {FilmCardType} from '../../types/films';
import {hoverFilmCardTime} from '../../utils/consts.ts';
import {Link} from 'react-router-dom';
import './film-card.css';
import {VideoPlayer} from '../video-player/video-player.tsx';
import {useEffect, useState} from 'react';

type FilmCardProps = {
  film: FilmCardType;
};

export function FilmCard({ film }: FilmCardProps): JSX.Element {
  const [needPlayVideo, setNeedPlayVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
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
    >
      <VideoPlayer
        src={film.previewVideoLink}
        poster={film.previewImage}
        muted
        isPlaying={isPlaying}
      />
      {!isPlaying && <h3 className="small-film-card__title">{film.name}</h3>}
    </Link>
  );
}
