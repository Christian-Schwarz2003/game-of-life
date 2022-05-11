import React from "react";

function Square({ alive, setalive,column }) {
	const clickHandler = () => {
		setalive(!alive);
		console.log(!alive);
	};
	const first=(column==0);
	return (
		(first?<a><br/>
		<button
		className={alive ? "cell alive" : "cell"}
		onClick={clickHandler}
	></button></a>:<button
	className={alive ? "cell alive" : "cell"}
	onClick={clickHandler}
></button>)
		
	);
}

export default Square;
