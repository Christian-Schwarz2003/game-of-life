import React, { useState } from "react";
import Square from "./Square";

function Field({ childFunc }) {
	const rows = 80;
	const cols = 80;

	var fields = [];

	const count_neighbours = (row, col) => {
		const left = col - 1 < 0 ? cols - 1 : col - 1;
		const top = row - 1 < 0 ? rows - 1 : row - 1;
		const right = col + 1 >= cols ? 0 : col + 1;
		const bottom = row + 1 >= rows ? 0 : row + 1;

		var aliveAround = 0;
		if (getAlive(top, left)) {
			aliveAround++;
		}
		if (getAlive(top, col)) {
			aliveAround++;
		}
		if (getAlive(top, right)) {
			aliveAround++;
		}

		if (getAlive(row, left)) {
			aliveAround++;
		}
		if (getAlive(row, right)) {
			aliveAround++;
		}

		if (getAlive(bottom, left)) {
			aliveAround++;
		}
		if (getAlive(bottom, col)) {
			aliveAround++;
		}
		if (getAlive(bottom, right)) {
			aliveAround++;
		}
		return aliveAround;
	};

	const rowXcolFalseArray = () => {
		let arr = [];

		for (let i1 = 0; i1 < rows; i1++) {
			for (let j1 = 0; j1 < cols; j1++) {
				arr[i1 * cols + j1] = false;
			}
		}
		return arr;
	};

	const [alives, setalives] = useState(rowXcolFalseArray);
	const nextAlives = [];

	const getAlive = (row, col) => {
		return alives[row * cols + col];
	};

	const getNextAlive = (row, col) => {
		return nextAlives[row * cols + col];
	};

	const changeAlives = (row, col, state) => {
		let alivescopy = alives.slice();
		alivescopy[col + row * rows] = state;
		setalives(alivescopy);
	};
	const changeNextAlives = (row, col, state) => {
		nextAlives[col + row * rows] = state;
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

	const updateNextState = (row, col) => {
		let neighbours = count_neighbours(row, col);
		if (getAlive(row, col)) {
			if (neighbours === 3 || neighbours === 2) {
				changeNextAlives(row, col, true);
			} else {
				changeNextAlives(row, col, false);
			}
		} else {
			if (neighbours === 3) {
				changeNextAlives(row, col, true);
			} else {
				changeNextAlives(row, col, false);
			}
		}
	};

	const updateNextStates = () => {
		for (let i1 = 0; i1 < rows; i1++) {
			for (let j1 = 0; j1 < cols; j1++) {
				updateNextState(i1, j1);
			}
		}
	};

	const applyUpdate = () => {
		setalives(nextAlives);
	};

	const doUpdate = () => {
		console.log("update");
		updateNextStates();

		applyUpdate();
	};

	React.useEffect(() => {
		childFunc.doUpdate = doUpdate;
	}, [alives]);

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
