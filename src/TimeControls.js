import "./style.css";
import React, { useState, useEffect, useRef } from "react";

export default function TimeControls({ step }) {
	const [play, setPlay] = useState(false);
	const [intervalId, setIntervalId] = useState();
	const delay = 100;

	const playHandler = () => {
		if(!play){
		setIntervalId(setInterval(step, delay));
		setPlay(true);
	}
	};
	const pauseHandler = () => {
		clearInterval(intervalId);
		setPlay(false);
	};

	const stepHandler = () => {
		if (!play) {
			step();
		}
	};

	return (
		<div>
			<button
				onClick={playHandler}
				className={play ? "play disabled" : "play"}
			/>

			<button
				onClick={pauseHandler}
				className={play ? "pause" : "pause disabled"}
			/>

			<button
				onClick={stepHandler}
				className={play ? "step disabled" : "step"}
			/>
		</div>
	);
}
