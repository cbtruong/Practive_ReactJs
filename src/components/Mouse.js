import React, { useEffect, useState, useRef } from "react";
import "./mouse.css"; // Tham chiếu đến tệp CSS ngoài

const Mouse = () => {
	//const [coords, setCoords] = useState({ x: 0, y: 0 });
	const circleRefs = useRef([]);
	const coords = { x: 0, y: 0 };
	const colors = [
		"#ffb56b",
		"#fdaf69",
		"#f89d63",
		"#f59761",
		"#ef865e",
		"#ec805d",
		"#e36e5c",
		"#df685c",
		"#d5585c",
		"#d1525c",
		"#c5415d",
		"#c03b5d",
		"#b22c5e",
		"#ac265e",
		"#9c155f",
		"#950f5f",
		"#830060",
		"#7c0060",
		"#680060",
		"#60005f",
		"#48005f",
		"#3d005e",
	];

	useEffect(() => {
		// Lấy tất cả các phần tử có class "circle" sau khi thành phần đã render
		const circles = document.querySelectorAll(".circle");
		// lưu vào useRef
		circleRefs.current = Array.from(circles);
		circleRefs.current.forEach((circle, index) => {
			circle.x = 0;
			circle.y = 0;
			circle.style.backgroundColor = colors[index % colors.length];
		});
		window.addEventListener("mousemove", (e) => {
			coords.x = e.clientX;
			coords.y = e.clientY;
		});
		const animateCircles = () => {
			let x = coords.x;
			let y = coords.y;

			circleRefs.current.forEach(function (circle, index) {
				circle.style.left = x - 5 + "px";
				circle.style.top = y - 5 + "px";

				circle.style.scale =
					(circleRefs.current.length - index) /
					circleRefs.current.length;

				circle.x = x;
				circle.y = y;

				const nextCircle =
					circleRefs.current[index + 1] || [0,0];
				x += (nextCircle.x - x) * 0.4;
				y += (nextCircle.y - y) * 0.4;
			});

			requestAnimationFrame(animateCircles);
		};

		animateCircles();
	}, []);

	return (
		<>
			
			<div className="circle"></div>
            <div className="circle"></div>
			<div className="circle"></div>
			<div className="circle"></div>
			<div className="circle"></div>
			<div className="circle"></div>
            <div className="circle"></div>
			<div className="circle"></div>
			<div className="circle"></div>
            <div className="circle"></div>
			<div className="circle"></div>
			<div className="circle"></div>
			<div className="circle"></div>
			<div className="circle"></div>
			<div className="circle"></div>
			<div className="circle"></div>
			<div className="circle"></div>
            <div className="circle"></div>
			<div className="circle"></div>
			<div className="circle"></div>
			<div className="circle"></div>
			<div className="circle"></div>
            <div className="circle"></div>
			<div className="circle"></div>
			<div className="circle"></div>
            <div className="circle"></div>
			<div className="circle"></div>
			<div className="circle"></div>
            <div className="circle"></div>
			<div className="circle"></div>
			<div className="circle"></div>
            <div className="circle"></div>
		
		</>
	);
};

export default Mouse;
