import React, { useEffect, useState } from "react";
import "./TodoApp.css";

import { AiOutlineDelete } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { RiEditFill } from "react-icons/ri";

const TodoApp = () => {
	const [isCompleteScreen, setIsCompleteScreen] = useState(false);
	const [allTodos, setAllTodos] = useState([]);
	const [newTitle, setNewTitle] = useState("");
	const [newDescription, setNewDescription] = useState("");
	const [currentEdit, setCurrentEdit] = useState("");
	const [currentEditedItem, setCurrentEditedItem] = useState("");
	const [completedTodos, setCompletedTodos] = useState([]);

	const handleAddTodo = () => {
		let newTodoItem = {
			title: newTitle,
			description: newDescription,
		};
		let updatedTodoArr = [...allTodos];
		updatedTodoArr.push(newTodoItem);
		setAllTodos(updatedTodoArr);
		localStorage.setItem("todolist", JSON.stringify(updatedTodoArr));
		setNewTitle("");
		setNewDescription("");
	};
	const handleDeleteTodo = (index) => {
		let reducedTodo = [...allTodos];
		reducedTodo.splice(index, 1);
		localStorage.setItem("todolist", JSON.stringify(reducedTodo));
		setAllTodos(reducedTodo);
	};
	const handleEdit = (index, item) => {
		setCurrentEdit(index);
		setCurrentEditedItem(item);
	};
	const handleUpdateTitle = (value) => {
		setCurrentEditedItem((prev) => {
			return { ...prev, title: value };
		});
	};
	const handleUpdateDescription = (value) => {
		setCurrentEditedItem((prev) => {
			return { ...prev, description: value };
		});
	};
	const handleUpdateTodo = () => {
		let newTodo = [...allTodos];
		newTodo[currentEdit] = currentEditedItem;
		setAllTodos(newTodo);
		setCurrentEdit("");
	};
	const handleComplete = (index) => {
		let now = new Date();
		let day = now.getDate();
		let month = now.getMonth() + 1;
		let year = now.getFullYear();
		let hours = now.getHours();
		let minutes = now.getMinutes();
		let seconds = now.getSeconds();
		let completedOn =day +"-" +month +"-" +year +" at " 
				+hours +":" +minutes +":" +seconds;
		let filteredItem = {
			...allTodos[index],
			completedOn: completedOn,
		};
		let updatedCompletedArr = [...completedTodos];
		updatedCompletedArr.push(filteredItem);
		handleDeleteTodo(index);
		localStorage.setItem(
			"completedTodos",
			JSON.stringify(updatedCompletedArr)
		);
		setCompletedTodos(updatedCompletedArr);
	};
	const handleDeleteCompletedTodo = (index) => {
		let reducedTodo = [...completedTodos];
		reducedTodo.splice(index, 1);
		localStorage.setItem("completedTodos", JSON.stringify(reducedTodo));
		setCompletedTodos(reducedTodo);
	};
	useEffect(() => {
		let savedTodo = JSON.parse(localStorage.getItem("todolist"));
		let savedCompletedTodo = JSON.parse(
			localStorage.getItem("completedTodos")
		);
		if (savedTodo) {
			setAllTodos(savedTodo);
		}
		if (savedCompletedTodo) {
			setCompletedTodos(savedCompletedTodo);
		}
	}, []);

	return (
		<div className="todo-app">
			<h1>TODOS APP</h1>
			<div className="todo-wrapper">
				<div className="todo-input">
					<div className="todo-input-item">
						<label htmlFor="">Title</label>
						<input
							type="text"
							value={newTitle}
							placeholder="What's the task Title?"
							onChange={(e) => setNewTitle(e.target.value)}
						/>
					</div>
					<div className="todo-input-item">
						<label htmlFor="">Description</label>
						<input
							type="text"
							value={newDescription}
							placeholder="What's the task Description?"
							onChange={(e) => setNewDescription(e.target.value)}
						/>
					</div>
					<button className="primary-btn" onClick={handleAddTodo}>
						Add
					</button>
				</div>
				<div className="btn-area">
					<button
						className={`secondary-btn ${
							isCompleteScreen === false ? "active" : ""
						}`}
						onClick={() => setIsCompleteScreen(false)}
					>
						Todo
					</button>
					<button
						className={`secondary-btn ${
							isCompleteScreen === true ? "active" : ""
						}`}
						onClick={() => setIsCompleteScreen(true)}
					>
						Completes
					</button>
				</div>
				<div className="todo-list">
					{isCompleteScreen === false
						? // tab todo
						  allTodos.map((item, index) => {
								if (currentEdit === index) {
									return (
										<div
											className="edit-wrapper"
											key={index}
										>
											<input
												type="text"
												placeholder="Updated Title"
												value={currentEditedItem.title}
												onChange={(e) =>
													handleUpdateTitle(
														e.target.value
													)
												}
											/>
											<textarea
												placeholder="Updated Description"
												rows={4}
												value={
													currentEditedItem.description
												}
												onChange={(e) =>
													handleUpdateDescription(
														e.target.value
													)
												}
											/>
											<button
												className="primary-btn"
												onClick={() =>
													handleUpdateTodo()
												}
											>
												Update
											</button>
										</div>
									);
								} else {
									return (
										<div className="todo-list-item" key={index}>
											<div>
												<h3>{item.title}</h3>
												<p>{item.description}</p>
											</div>
											<div>
												<AiOutlineDelete
													onClick={() =>
														handleDeleteTodo(index)
													}
													className="icon"
												/>
												<FaCheck
													onClick={() =>
														handleComplete(index)
													}
													className="check-icon"
												/>
												<RiEditFill
													className="check-icon"
													onClick={() =>
														handleEdit(index, item)
													}
												/>
											</div>
										</div>
									);
								}
						  })
						: // tab complete
						  completedTodos.map((item, index) => {
								return (
									<div className="todo-list-item" key={index}>
										<div>
											<h3>{item.title}</h3>
											<p>{item.description}</p>
											<p>{item.completedOn}</p>
										</div>
										<div>
											<AiOutlineDelete
												className="icon"
												onClick={() =>
													handleDeleteCompletedTodo(
														index
													)
												}
												title="Delete?"
											/>
										</div>
									</div>
								);
						  })}
				</div>
			</div>
		</div>
	);
};

export default TodoApp;
