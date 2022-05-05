import React, {useState, useEffect, useRef } from 'react';
import AudioControls from './AudioControls';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const AudioPlayer = () => {
    const {id} = useParams();

    const song = useSelector((state) => state.song[id]);
    console.log(song);
    console.log(id);

    const test = useSelector((state)=>state);

    	const title = useSelector((state) => state.song[id]?.songName);
		const artist = useSelector((state) => state.song[id]?.User.username);
		const audioSrc = useSelector((state) => state.song[id]?.url);
		const image = useSelector((state) => state.song[id]?.Album.imageUrl);
		const color = "#a2b3ca";


	// const tracks = [
	//   {
	//     title: string,
	//     artist: string,
	//     audioSrc: string | import,
	// 		image: string,
	//     color: string,
	//   },
	// ...];

	// // const audioElement = new Audio(audio source);
	// audioElement.play();
	// audioElement.pause();

	// audioElement.currentTime;
	// audioElement.ended;
	// audioElement.duration;

	const [trackIndex, setTrackIndex] = useState(0);
	const [trackProgress, setTrackProgress] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);

	// const title = song?.songName;
	// const artist = song?.User.username;
	// const audioSrc = song?.url;
	// const image = song?.Album.imageUrl;
	// const color = "#a2b3ca";


	const audioRef = useRef(new Audio(audioSrc));
	const intervalRef = useRef();
	const isReady = useRef(false);

	//destructure for conciseness
	const { duration } = audioRef.current;

	useEffect(() => {
		//pause and clean up on unmount
		return () => {
			audioRef.current.pause();
			clearInterval(intervalRef.current);
		};
	}, []);

	// const toPrevTrack = () => {
	// 	if (trackIndex - 1 < 0) {
	//     setTrackIndex(tracks.length - 1);
	//   } else {
	//     setTrackIndex(trackIndex - 1);
	//   }
	// };

	// const toNextTrack = () => {
	// if (trackIndex < tracks.length - 1) {
	// 	setTrackIndex(trackIndex + 1);
	// } else {
	// 	setTrackIndex(0);
	// }
	// };

	// Handle setup when changing tracks
	// useEffect(() => {
	// 	audioRef.current.pause();

	// 	audioRef.current = new Audio(audioSrc);
	// 	setTrackProgress(audioRef.current.currentTime);

	// 	if (isReady.current) {
	// 		audioRef.current.play();
	// 		setIsPlaying(true);
	// 		startTimer();
	// 	} else {
	// 		// Set the isReady ref as true for the next pass
	// 		isReady.current = true;
	// 	}
	// }, [trackIndex]);

	useEffect(() => {
		if (isPlaying) {
			audioRef.current.play();
		} else {
			audioRef.current.pause();
		}
	}, [isPlaying]);

	return (
		<div className="audio-player">
			<AudioControls
				isPlaying={isPlaying}
				// onPrevClick={toPrevTrack}
				// onNextClick={toNextTrack}
				onPlayPauseClick={setIsPlaying}
			/>
			<div className="track-info">
				<h2 className="title">{title}</h2>
				<h3 className="artist">{artist}</h3>
			</div>
			<img
				className="artwork"
				src={image}
				alt={`track artwork for ${title} by ${artist}`}
			/>
		</div>
	);
}

export default AudioPlayer;