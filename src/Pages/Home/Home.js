import React from "react";
import "./Home.css";
import ErrorImage from "../../assets/loading.jpg";
import { lists_project } from "../../data.js";
import { Link } from "react-router-dom";

const Home = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

	const lists = lists_project;
	return (
		<div className="container">
			<div className="navbar">
				<h2>Project Practice</h2>
				<p>
					Everything starts from zero. Be persistent, diligent and
					practice and you will become a programming master.
				</p>
			</div>
			<div className="frames">
				{lists.map((item, index) => {
					return (
						<div className="frame" key={index}>
							<Link to={item.path}>
								<img
									src={
										item.url !== "" ? PF+item.url : ErrorImage
									}
									alt=""
								/>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
