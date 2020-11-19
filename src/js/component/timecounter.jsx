import React, { useState, useEffect } from "react";
import "../../styles/timecounter.css";

function TimeCounter() {
	//seconds almacena valor del timer
	//isActive alamcena el estado del timer

	const [seconds, setSeconds] = useState(0);
	const [isActive, setIsActive] = useState(false);

	//funcion toggle cambia el valor de isActive a lo opuesto de lo que es actualmente:

	function toggle() {
		setIsActive(!isActive);
	}

	//funcion reset pondra el timer a 0. Esta y toggle las vinculamos con los botones usando...
	//...onClick={toggle} y onClick={reset}

	function reset() {
		setSeconds(0);
		setIsActive(false);
	}

	//usamos useEffect para detectar cuando isActive is true...
	//e iniciar el timer dentro de esa función

	useEffect(
		() => {
			let interval = null;
			if (isActive) {
				interval = setInterval(() => {
					setSeconds(seconds => seconds + 1);
				}, 1000);
			} else if (!isActive && seconds !== 0) {
				clearInterval(interval);
			}
			return () => clearInterval(interval);
		},
		[isActive, seconds]
	);

	return (
		<div className="container">
			<h2>Simple Counter</h2>
			<div className="time">
				<span>
					<i class="fas fa-stopwatch" />
					{seconds}s
				</span>
			</div>
			<div className="row">
				<button
					className={`button button-primary button-primaary-${
						isActive ? "active" : "inactive"
					}`}
					onClick={toggle}>
					{isActive ? "Pause" : "Start"}
				</button>
				<button className="Reset button" onClick={reset}>
					Reset
				</button>
			</div>
		</div>
	);
}

export default TimeCounter;
