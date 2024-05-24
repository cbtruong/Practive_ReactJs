import React from "react";
import Home from "./Pages/Home/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { lists_project } from "./data";

function App() {
	const lists = lists_project;
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				{lists.map((item, index) => {
					return (
						<Route
							path={item.path}
							element={<item.page />}
							key={index}
						/>
					);
				})}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
