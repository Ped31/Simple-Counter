import React, { useState, useEffect } from "react";
import TimeCounter from "./timecounter.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="timecounter">
			<TimeCounter />
		</div>
	);
}
