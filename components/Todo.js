import React, { Component } from 'react'
import actions from '../redux/action'

class Todo extends Component {

	handleComplete(){
		this.props.actions.completeTodo(this.props.todo.id);
	}

	handleDelete(){
		this.props.actions.deleteTodo(this.props.todo.id);
	}

	render() {
		return (
			<div>
				<li>{this.props.todo.text}</li>
				<button onClick={this.handleComplete.bind(this)}>complete</button>
				<button onClick={this.handleDelete.bind(this)}> deleted</button>
			</div>
		)
	}
}

export default Todo