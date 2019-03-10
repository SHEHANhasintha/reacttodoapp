import React , { Component } from 'react';

export class AddTodo extends Component{

	onChange = (e) => this.setState({ [e.target.name]:
	e.target.value });


	render(){
		return(
			<form style={{display:'flex'}}>
				<input type="text" name="title" style={{ flex: '10', padding: '5px'}} onChange={this.onChange} placeholder="Add Todo ..." />
				<input type="submit" value="Submit" className="btn" style={{flex:1}} />
			</form>
		)
	}
}

export default AddTodo;