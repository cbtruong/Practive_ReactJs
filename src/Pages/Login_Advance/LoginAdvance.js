import React, { useEffect, useRef } from "react";
import "./LoginAdvance.css";
import { Link } from "react-router-dom";

import { FaGooglePlusG } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const LoginAdvance = () => {
	const container = useRef();
	const login = useRef();
	const register = useRef();
	useEffect(() => {
		login.current.addEventListener("click", () => {
			container.current.classList.remove("active");
		});
		register.current.addEventListener("click", () => {
			container.current.classList.add("active");
		});
	}, []);

	return (
		<div className="LoginAdvance-wrapper">
			<div className="LoginAdvance-content " ref={container}>
				<form className="form-LoginAdvance sign-up">
					<h1>
						Create Account
					</h1>
					<div className="socials-icon">
						<Link to="#" className="icon">
							<FaGooglePlusG />
						</Link>
						<Link to="#" className="icon">
							<FaFacebookF />
						</Link>
						<Link to="#" className="icon">
							<FaGithub />
						</Link>

						<Link to="#" className="icon">
							<FaLinkedinIn />
						</Link>
					</div>
					<span>or use your email for registeration</span>
					<input type="text" placeholder="Name" />
					<input type="email" placeholder="Email" />
					<input type="password" placeholder="Password" />
					<button>SIGN UP</button>
				</form>
				<form className="form-LoginAdvance sign-in">
					<h1>Sign In</h1>
					<div className="socials-icon">
						<Link to="#" className="icon">
							<FaGooglePlusG />
						</Link>
						<Link to="#" className="icon">
							<FaFacebookF />
						</Link>
						<Link to="#" className="icon">
							<FaGithub />
						</Link>

						<Link to="#" className="icon">
							<FaLinkedinIn />
						</Link>
					</div>
					<span>or use your email password</span>
					<input type="email" placeholder="Email" />
					<input type="password" placeholder="Password" />
					<Link to="#">Forget Your Password?</Link>
					<button>SIGN IN</button>
				</form>
				<div className="toggle-container">
					<div className="toggle">
						<div className="toggle-panel toggle-left">
							<h1>Welcome Back!</h1>
							<p>
								Enter your personal details to use all of site
								features
							</p>
							<button className="hidden" id="login" ref={login}>
								Sign In
							</button>
						</div>
						<div className="toggle-panel toggle-right">
							<h1>Hello, Friend!</h1>
							<p>
								Register with your personal details to use all
								of site features
							</p>
							<button
								className="hidden"
								id="register"
								ref={register}
							>
								Sign Up
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginAdvance;
