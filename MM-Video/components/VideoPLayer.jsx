import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef(null);

  const togglePlay = () => {
    setPlaying(!playing);
  };

  const stopVideo = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(0);
      setPlaying(false);
    }
  };

  return (
    <div>
      <h1>Video Player</h1>
      <ReactPlayer
        ref={playerRef}
        url="https://youtu.be/J---aiyznGQ" // Reemplaza con la URL de tu video remoto o ruta local
        playing={playing}
        controls={true}
        width="100%"
        height="auto"
      />
      <div>
        <button onClick={togglePlay}>{playing ? 'Pause' : 'Play'}</button>
        <button onClick={stopVideo}>Stop</button>
      </div>
    </div>
  );
};

export default VideoPlayer;
