import "./style.css";
import React, { useState, useEffect, useRef } from "react";

export default function TimeControls({ step }) {
	const [play, setPlay] = useState(false);
	const [id,setId]=useState();
	var refreshIntervalId;
	const delay = 500;
	const playHandler = () => {
		setId(setInterval(step,500))
		setPlay(true);
	};
	const pauseHandler=()=> {
		clearInterval(id);
		setPlay(false);
	}
	
	
	
	
	
	

	

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
