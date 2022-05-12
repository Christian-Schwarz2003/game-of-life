import React from "react";

function Square({ alive, setalive,column }) {
	const clickHandler = () => {
		setalive(!alive);
	};
	const first=(column==0);
	return (
		(first?<a><div></div>
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
