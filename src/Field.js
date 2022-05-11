import React, { useState } from "react";
import Square from "./Square";

function Field() {
	const rows = 10;
	const cols = 10;

	var fields = [];

	const count_neighbours = (row, col) => {
		const left = col - 1 < 0 ? cols - 1 : col - 1;
		const top = row - 1 < 0 ? rows - 1 : row - 1;
		const right = col + 1 > cols ? 0 : col + 1;
		const bottom = row + 1 > rows ? 0 : row + 1;

		var aliveAround = 0;
		if (alives[top][left]) {
			aliveAround++;
		}
		if (alives[top][col]) {
			aliveAround++;
		}
		if (alives[top][right]) {
			aliveAround++;
		}

		if (alives[row][left]) {
			aliveAround++;
		}
		if (alives[row][right]) {
			aliveAround++;
		}

		if (alives[bottom][left]) {
			aliveAround++;
		}
		if (alives[bottom][col]) {
			aliveAround++;
		}
		if (alives[bottom][right]) {
			aliveAround++;
		}
		return aliveAround;
	};

	const rowXcolFalseArray = [];
	for (let i1 = 0; i1 < rows; i1++) {
		for (let j1 = 0; j1 < cols; j1++) {
			rowXcolFalseArray[i1 * cols + j1] = true;
		}
	}

	const [alives, setalives] = useState(rowXcolFalseArray);
	const [nextAlives, setnextAlives] = useState(rowXcolFalseArray);
	console.log(alives);

	const getAlive = (row, col) => {
		return alives[row * cols + col];
	};

	const getNextAlive = (row, col) => {
		return nextAlives[row * cols + col];
	};

	for (let i1 = 0; i1 < rows; i1++) {
		for (let j1 = 0; j1 < cols; j1++) {
			console.log(getAlive(i1, j1));
		}
	}

	const changeAlives = (row, col, state) => {
		let alivescopy = alives.slice();
		alivescopy[col + row * rows] = state;
		setalives(alivescopy);
	};
	const changeNextAlives = (row, col, state) => {
		let nextAlivescopy = nextAlives.slice();
		nextAlivescopy[col + row * rows] = state;
		setnextAlives(nextAlivescopy);
	};

	for (let i1 = 0; i1 < rows; i1++) {
		for (let j1 = 0; j1 < cols; j1++) {
			fields[i1 * cols + j1] = {
				alive: getAlive(i1, j1),
				setalive: (state) => changeAlives(i1, j1, state),
				column: j1,
				key: i1 * cols + j1,
			};
		}
	}

	return (
		<div>
			<div>
				{fields.map((item) => (
					<Square
						key={item.key}
						alive={item.alive}
						setalive={item.setalive}
						column={item.column}
					></Square>
				
				))}
			</div>
		</div>
	);
}

export default Field;
