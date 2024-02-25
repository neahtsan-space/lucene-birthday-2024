import React, { useState, useEffect } from 'react';

function Aud() {
  const [audio] = useState(new Audio("/song.mp3"));
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState("Song.mp3");

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
    return () => {
      audio.pause();
    };
  }, [audio, isPlaying]); 

  const togglePlay = () => {
    setIsPlaying(!isPlaying); 
  }

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const volume = parseFloat(event.target.value);
    audio.volume = volume;
  }

  return (
    <div>
      <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        defaultValue="1"
        onChange={handleVolumeChange}
      />
      <p>Currently Playing: {currentSong}</p>
    </div>
  );
}

export default Aud;