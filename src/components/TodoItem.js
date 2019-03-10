import React, { Component } from 'react';

const btnStyle = {
	background: '#ccc',
	float: 'right',
	border:'none'
}

class Todos extends Component{
	getStyle = () => {
		if(this.props.todo.completed){
			return {
				background: '#f4f4f4',
				padding: '10px',
				borderBottom: '1px #434 dotted',
				textDecoration: this.props.todo.completed ? 'line-through' : 'none'
			}
			
		} else {
			return {
				textDecoration: 'none'
			}
		}
	}



	render() {
		const { id, title } = this.props.todo;
		return (
			<div style={this.getStyle()}>
				<input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> 
				{ this.props.todo.title }
				<button style={btnStyle} onClick={this.props.del.bind(this, id)}>X</button>
			</div>
		);
	}
}


export default Todos;