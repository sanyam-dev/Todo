import React, { useState } from "react";
import Todo from './Todo'

function TodoList() {
	const [todos, setTodos] = useState([]);

	const newArray = {
		id: todos.length+1,
		title: "todo1",
		desc: "desc1",
	};

	const onChangeTitle = (e) => {
		e.preventDefault();
		newArray.title = e.target.vddalue
	}
	const onChangeDesc = (e) => {
		e.preventDefault();
		newArray.desc = e.target.value
	}

	const handleReset = () =>{
		Array.from(document.querySelectorAll('input')).forEach(
			input => (input.value = "")
		);
	}
	
	const handleRemoveItem = (e) =>{
		e.preventDefault()
		console.log(e.target.id);
		let id = e.target.id ;
		let newTodo = [...todos];
		if(id > newTodo.length)
		{
			newTodo.splice(newTodo.length-1,1);
		}
		else{
			newTodo.splice(id-1,1);
		}
		console.log(newTodo);
		setTodos([...newTodo]);
		// e.target.style.display = 'none';
		
	};

	const styleTodo = {
		border : "1px solid orange",
		margin : "0.5vw",
		padding : "1vw",
	};
	return (
		<div className = "container-sm">
			<form>
				<div className="form-group">
					<label>Todo Title </label>
					<input className="form-control" id = "title" placeholder="Add Todo" onChange = {onChangeTitle}/>
				</div>
				<div className="form-group">
					<label>Todo Desc. </label>
					<input className="form-control" id = "desc" placeholder="Add Desc." onChange = {onChangeDesc}/>
				</div>
				<button
					type="submit"
					className="btn btn-primary"
					onClick={(e) => {
						e.preventDefault();
						setTodos([...todos, newArray]);
						console.log(todos);
						handleReset();
					}}
					style = {{margin : "10px 0px 10px 0px"}}
				>
					Submit
				</button>
			</form>
			<ol>
				{todos.map((todo) => (
					<li key = {todo.id} style = {styleTodo}><Todo todo = {todo}/> 
					<button 
						id = {todo.id} 
						className = "btn btn-danger" 
						onClick = {handleRemoveItem}
					>
						Del </button></li>
				))}
			</ol>
		</div>
	);
}

export default TodoList;
