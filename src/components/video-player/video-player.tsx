import { useEffect, useRef } from 'react';
import './video-player.css';

type VideoPlayerProps = {
  src: string;
  poster: string;
  isPlaying: boolean;
  muted: boolean;
};

export function VideoPlayer(
  {
    src,
    poster,
    muted,
    isPlaying,
  }: VideoPlayerProps
) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    const playerElement = videoRef.current;
    if (!playerElement) {
      return;
    }
    if (!isPlaying) {
      playerElement.load();
      playerElement.pause();
      return;
    }
    playerElement.play();
  }, [isPlaying]);
  return (
    <video
      className="video-player"
      ref={videoRef}
      src={src}
      poster={poster}
      muted={muted}
    />
  );
}
