import React, { useEffect, useState } from "react";
import "./LoginAdvanceV2.css";
// import icon Link icon: https://react-icons.github.io/react-icons/search/#q=facebook
import { RiFacebookFill } from "react-icons/ri";
import { FaGoogle, FaTiktok } from "react-icons/fa";
import { GrFormNextLink } from "react-icons/gr";
import { IoMdArrowRoundBack } from "react-icons/io";

const LoginAdvance_v2 = () => {
	
	const backgroundImageStyle = {
		backgroundImage: `url(${process.env.REACT_APP_PUBLIC_FOLDER}bg_LoginAdvance_v2.jpg)`,
	};
	const [isFormLogin, setIsFormLogin] = useState(false);
	const [account,setAccount]=useState({});
	const [userLogin, setUserLogin] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [cfPass, setCfPass] = useState("");
	const [errName, setErrName] = useState(false);
	const [errEmail, setErrEmail] = useState(false);
	const [errPass, setErrPass] = useState(false);
	const [errCfPass, setErrCfPass] = useState(false);


	// confirm email
	const validateEmail = (email) => {
		const re =
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	};
	const handleNameChange = (e) => {
		const lengthName = e.target.value;
		setName(e.target.value);
		if (lengthName) {
			setErrName(false);
		} else {
			setErrName(true);
		}
	};
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
		if (!validateEmail(e.target.value)) {
			setErrEmail(true);
		} else {
			setErrEmail(false);
		}
	};
	const handlePassChange = (e) => {
		const lengthPass = e.target.value;
		setPass(lengthPass);
		if (lengthPass.length < 6) {
			setErrPass(true);
		} else {
			setErrPass(false);
		}
	};
	const handleCfPassChange = (e) => {
		const lengthCfPass = e.target.value;
		setCfPass(lengthCfPass);
		if (lengthCfPass === pass) {
			setErrCfPass(false);
		} else {
			setErrCfPass(true);
		}
	};
	const handleLogin = (e) => {
		e.preventDefault();
		var users = JSON.parse(localStorage.getItem("users")) || [];
		var isValid = true;
		// Kiểm tra trường email
		if (email === "") {
			setErrEmail(true);
			isValid = false;
		} else {
			// Kiểm tra xem email đã tồn tại trong mảng users chưa
			const userExit=users.some((user) => user.email.trim() === email.trim());
			setUserLogin(users.some((user) => user.email.trim() === email.trim()));
			if (!userExit) {
				setErrEmail(true);
				isValid = false;
			}
			else{
			const searchAccount=users.find((user) => user.email.trim() === email.trim());
			setAccount(searchAccount)
			}
		}
		if (pass === "" || errPass === true) {
			setErrPass(true);
			isValid = false;
		}

		if (isValid) {
			
			console.log("Login successful for email:", email);
		} else {
			console.log("Login failed");
		}
	};
	const handleRegister = (e) => {
		e.preventDefault();
		var users = JSON.parse(localStorage.getItem("users")) || [];
		var isValid = true;
		if (name === "") {
			setErrName(true);
			isValid = false;
		}
		if (email === "" || errEmail === true) {
			setErrEmail(true);
			isValid = false;
		}
		if (pass === "" || errPass === true) {
			setErrPass(true);
			isValid = false;
		}
		if (cfPass === "" || errCfPass === true) {
			setErrCfPass(true);
			isValid = false;
		}
		if (isValid) {
			var user = {
				name: name,
				email: email,
				pass: pass,
				cfPass: cfPass,
			};

			localStorage.setItem("users", JSON.stringify([...users, user]));
			users = JSON.parse(localStorage.getItem("users"));
			console.log(users);
			resetForm();
			setIsFormLogin(false);
			
		}
	};
	const handleLogout=()=>{
		setEmail("");
		setName("");
		setPass("");
		console.log(userLogin)
		setUserLogin(false);


	}
	const resetForm=()=>{
		setEmail("");
		setName("");
		setPass("");
		setCfPass("");
		setErrName(false);
		setErrEmail(false);
		setErrPass(false);
		setErrCfPass(false);
		
	}
	// Overlay form
	const handleOverlay=()=>{
		resetForm();
		setIsFormLogin(!isFormLogin)
	}
	return (
		<div className="LoginAdvance_v2_wrapper" style={backgroundImageStyle}>
			{userLogin === false ? (
				<div className={`container ${isFormLogin ? "active" : ""}`}>
					{/* Form Login */}
					<div
						className="register_form form_container"
						id="register_form"
					>
						<form action="">
							<h1>Register here</h1>
							<div className="input_wrapper">
								<input
									type="text"
									placeholder="Name"
									value={name}
									onChange={handleNameChange}
								/>
								<span className="input-border"></span>
								{errName ? (
									<span className="error">
										* Name format is not valid.
									</span>
								) : (
									""
								)}
							</div>
							<div className="input_wrapper">
								<input
									type="email"
									placeholder="Email"
									value={email}
									onChange={handleEmailChange}
								/>
								<span className="input-border"></span>
								{errEmail ? (
									<span className="error">
										* Email format is not valid.
									</span>
								) : (
									""
								)}
							</div>

							<div className="input_wrapper">
								<input
									type="password"
									placeholder="Password"
									value={pass}
									onChange={handlePassChange}
								/>
								<span className="input-border"></span>

								{errPass ? (
									<span className="error">
										* Password must be at least 6
										characters.
									</span>
								) : (
									""
								)}
							</div>
							<div className="input_wrapper">
								<input
									type="password"
									placeholder="Confirm Password"
									value={cfPass}
									onChange={handleCfPassChange}
								/>
								<span className="input-border"></span>
								{errCfPass ? (
									<span className="error">
										* Confirm password must be the same as
										the password
									</span>
								) : (
									""
								)}
							</div>
							<button
								className="btnRegister"
								onClick={handleRegister}
							>
								Register
							</button>
							<p>or use your account</p>
							<div className="icons">
								<div>
									<RiFacebookFill />
								</div>
								<div>
									<FaGoogle />
								</div>
								<div>
									<FaTiktok />
								</div>
							</div>
						</form>
					</div>
					{/* Form Register */}
					<div className="login_form form_container" id="login_form">
						<form action="">
							<h1 className="title_login">Login here</h1>
							<div className="input_wrapper">
								<input
									type="email"
									placeholder="Email"
									value={email}
									onChange={handleEmailChange}
								/>
								<span className="input-border"></span>
								{errEmail ? (
									<span className="error">
										* Email format is not valid.
									</span>
								) : (
									""
								)}
							</div>
							<div className="input_wrapper">
								<input
									type="password"
									placeholder="Password"
									value={pass}
									onChange={handlePassChange}
								/>
								<span className="input-border"></span>

								{errPass ? (
									<span className="error">
										* Password must be at least 6
										characters.
									</span>
								) : (
									""
								)}
							</div>
							<div className="additional_options">
								<div className="option_left">
									<input type="checkbox" />
									<label htmlFor="">Remember me</label>
								</div>
								<div className="option_right">
									<a href="#">Forgot password?</a>
								</div>
							</div>
							<button onClick={handleLogin}>Login</button>
							<p>or use your account</p>
							<div className="icons">
								<div>
									<RiFacebookFill />
								</div>
								<div>
									<FaGoogle />
								</div>
								<div>
									<FaTiktok />
								</div>
							</div>
						</form>
					</div>
					{/* Form overlay */}
					<div className="overplay_form">
						<div className="overlay_wrappers">
							<div
								className="overlay_login overlay"
								id="overlay_login"
							>
								<h1>Hello friends</h1>
								<p>
									If you have an account, login here and have
									fun
								</p>
								<button
									id=""
									onClick={handleOverlay}
								>
									<IoMdArrowRoundBack className="next_login" />{" "}
									Login
								</button>
							</div>
							<div
								className="overlay_register overlay"
								id="overlay_register"
							>
								<h1>Start your journey now</h1>
								<p>
									If you don'n have an account yet, join us
									and start your journey
								</p>
								<button
									onClick={handleOverlay}
								>
									Register{" "}
									<GrFormNextLink className="next_register" />
								</button>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div
					style={{
						width: "40%",
						height: "40%",
						boxShadow: "0 10px 14px rgba(0, 0, 0, 0.4)",
						textAlign:"center",
						display:'flex',
						alignItems:'center',
						justifyContent:'center',
						flexDirection:'column'

					}}
					className="hello_page"
				>
					<h1 style={{
						fontWeight:"bold",
						fontSize:"50px",
						filter: "drop-shadow(0 0 3px rgba(10, 10, 10,0.3))",
					}}>Hello {account.name}!</h1>
					<button
					onClick={handleLogout}
					>LogOut</button>
				</div>
			)}
		</div>
	);
};

export default LoginAdvance_v2;
