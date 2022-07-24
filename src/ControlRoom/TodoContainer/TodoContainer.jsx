import React, { useState } from "react";
import "./TodoContainer.scss"
import TaskList from "./TaskList";
import FormTodo from "./FormTodo";
import { FormattedDate } from "react-intl";

const TodoContainer = () => {
	const [list, setList] = useState([]);
	const handleAddItem = addItem => {
		setList([...list, addItem]); 
	};
	return (
		<section><FormattedDate
		value={new Date()}
		day={"2-digit"}
		weekday={"long"}
		year={"numeric"}
		hourCycle={"h24"}
	  />
	  <div className='container__TodoList'>
			<FormTodo handleAddItem={handleAddItem} />
			<TaskList list={list} setList={setList} />
		</div></section>
		
	);
};

export default TodoContainer;