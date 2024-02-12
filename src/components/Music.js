import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import audio from "../img/aathmaraama.mp3";



const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>

      <Link to="/moreslok" className="btn btn-outline-danger">
        Read Shlok From Another Chapters
      </Link><br></br>

      <audio ref={audioRef} src={audio} />
      <button style={{ margin: "20px", }} onClick={togglePlay}>{isPlaying ? <i class="fa-solid fa-pause"></i> : <i class="fa-solid fa-play"></i>}</button>


      <button onClick={togglePlay} className="btn btn-outline-success">
        <i className="fas fa-play" /> Play | Pause Audio
      </button>
    </div>
  );
};

export default Music;
// import React, { useState, useRef, useEffect } from 'react';
// import audio from "../img/aathmaraama.mp3";

// const Music = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audioRef = useRef(isFinite);

//   useEffect(() => {
//     const shouldPlay = window.confirm("Do you want to play the music?");
//     if (shouldPlay) {
//       setIsPlaying(true);
//       audioRef.current.play();
//     }
//   }, []);

//   const togglePlay = () => {
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div>
//       <audio ref={audioRef} src={audio} autoPlay={false} />
//       <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
//     </div>
//   );
// };

// export default Music;
