import {HOVER_FILM_TIME_CARD} from '../../consts.ts';
import {Link} from 'react-router-dom';
import './film-card.css';
import {VideoPlayer} from '../video-player/video-player.tsx';
import {useEffect, useState} from 'react';
import {FilmType} from "../../types/types.ts";

type FilmCardProps = {
  film: FilmType;
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
      }, HOVER_FILM_TIME_CARD);
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
