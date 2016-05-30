import React, { Component } from 'react'
import Todo from './Todo'

class TodoList extends Component {

	render() {
		return (
			<ul>
				{
					this.props.todos.map((todo) =>{
						return <Todo dispatch={this.props.dispatch} todo={todo} key={todo.id} />
					})
				}
			</ul>
		)
	}
}

export default TodoList