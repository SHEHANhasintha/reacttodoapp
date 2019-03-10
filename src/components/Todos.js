import React, { Component } from 'react';
import TodoItem from './TodoItem';


class Todos extends Component{

	markComplete = (id) => {
		console.log(id);
	}

	render() {
		return this.props.todos.map((todo) => (

				<TodoItem key={todo.id} todo={todo} markComplete={this.markComplete}/>

		));
	}
}

export default Todos;