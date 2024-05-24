import React, { useState, useRef } from "react";
import "./RandomPassword.css";
import { FaCopy } from "react-icons/fa";
import copy from "copy-to-clipboard";

const RandomPassword = () => {
	const resultRef = useRef(null);
	const [values, setValues] = useState(6);
	const [result, setResult] = useState("");
	const [capital, setCapital] = useState(false);
	const [small, setSmall] = useState(false);
	const [number, setNumber] = useState(false);
	const [symbol, setSymbol] = useState(false);

	const handleRandomPassword = (e) => {
		let generate = "";
		let arrayChar = [];
		e.preventDefault();
		if (capital) arrayChar.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
		if (small) arrayChar.push("abcdefghijklmnopqrstuvwxyz");
		if (number) arrayChar.push("0123456789");
		if (symbol) arrayChar.push("!@#$%^&*()");
		if (arrayChar.length === 0) {
			resultRef.current.classList.add("error");
			setTimeout(() => {
				resultRef.current.classList.remove("error");
			}, 500);
			return;
		}
		for (let i = 0; i < values; i++) {
			let randomCharSetIndex = Math.floor(
				Math.random() * arrayChar.length
			);
			const selectedCharSet = arrayChar[randomCharSetIndex];
			const randomCharIndex = Math.floor(
				Math.random() * selectedCharSet.length
			);
			generate += selectedCharSet[randomCharIndex];
		}
		setResult(generate);
	};
	const handleCopy = () => {
		if (result.length === 0) {
			resultRef.current.classList.add("error");
			setTimeout(() => {
				resultRef.current.classList.remove("error");
			}, 500);
		} else {
			copy(result);
		}
	};
	return (
		<div className="random-password-wrapper">
			<form className="random-password">
				<div ref={resultRef} className="result">
					<input
						type="text"
						id="result"
						placeholder="Min 6 char"
						// chỉ đọc
						readOnly
						value={result}
					/>
					<div className="clipboard">
						<FaCopy
							className="copy-icon "
							onClick={() => handleCopy()}
						/>
					</div>
				</div>
				<div className="select">
					<label htmlFor="length">Length</label>
					<input
						type="number"
						id="length"
						min={6}
						max={20}
						value={values}
						onChange={(e) => setValues(e.target.value)}
					/>
				</div>
				<div className="select">
					<label htmlFor="Capital">Capital</label>
					<input
						type="checkbox"
						className="capital"
						id="capital"
						value={capital}
						onChange={() => setCapital(!capital)}
					/>
				</div>
				<div className="select">
					<label htmlFor="Small">Small</label>
					<input
						type="checkbox"
						className="small"
						id="small"
						value={small}
						onChange={() => setSmall(!small)}
					/>
				</div>
				<div className="select">
					<label htmlFor="number">Number</label>
					<input
						type="checkbox"
						className="number"
						value={number}
						onChange={() => setNumber(!number)}
					/>
				</div>
				<div className="select">
					<label htmlFor="symbol">Symbol</label>
					<input
						type="checkbox"
						className="symbol"
						value={symbol}
						onChange={() => setSymbol(!symbol)}
					/>
				</div>
				<button onClick={(e) => handleRandomPassword(e)}>
					Generate Password
				</button>
			</form>
		</div>
	);
};

export default RandomPassword;
