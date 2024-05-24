import React, { useEffect, useState } from "react";
import "./DigitalClock.css";

const DigitalClock = () => {
  
  const [time,setTime]=useState("");
  const updateCurrentTime = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    let formattedHours = hours % 12 || 12; // Chuyển về định dạng 12 giờ
    let period = hours >= 12 ? 'PM' : 'AM'; // Xác định PM hoặc AM

    setTime(
      (formattedHours < 10 ? '0' + formattedHours : formattedHours) + ':' +
      (minutes < 10 ? '0' + minutes : minutes) + ':' +
      (seconds < 10 ? '0' + seconds : seconds) + ' ' + period
    );
  };
  useEffect(()=>{
    updateCurrentTime();
    const interval = setInterval(updateCurrentTime, 1000);

    return () => clearInterval(interval);
  },[]);
	return (
		<div className="digital_clock">
			<div className="wrapper">
				<div className="display">
					<p>{time}</p>
				</div>
			</div>
		</div>
	);
};

export default DigitalClock;
