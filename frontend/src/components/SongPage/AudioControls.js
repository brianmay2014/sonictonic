import React from "react";
// import { ReactComponent as Play } from "./assets/play.svg";
// import { ReactComponent as Pause } from "./assets/pause.svg";
// import { ReactComponent as Next } from "./assets/next.svg";
// import { ReactComponent as Prev } from "./assets/prev.svg";

const AudioControls = ({ isPlaying, onPlayPauseClick }) => (
	<div className="audio-controls">
		{/* <button
     type='button'
     className='prev play-btn'
     aria-label='Previous'
     onClick={onPrevClick}
     >
         <Prev />
     </button> */}
		{isPlaying ? (
			<button
				type="button"
				className="pause play-btn"
				aria-label="Pause"
				onClick={() => onPlayPauseClick(false)}
			>
				<i className="fa-solid fa-pause"></i>
			</button>
		) : (
			<button
				type="button"
				className="play play-btn"
				onClick={() => onPlayPauseClick(true)}
				aria-label="Play"
			>
				<i className="fa-solid fa-play"></i>
			</button>
		)}
		{/* <button
        type='button'
        className='next'
        aria-label="Next"
        onClick={onNextClick}
        >
            <Next />
        </button> */}
	</div>
);

export default AudioControls;