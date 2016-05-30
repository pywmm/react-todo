import React, { Component } from 'react'
import actions from '../redux/action'

class TodoInput extends Component {

	constructor (props, context) {
		super(props, context)
		this.state = {
			inputText: 'initial text'
		}
	}

	handleChange (e){
		this.setState ({
			inputText: e.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props.dispatch(actions.addTodo(this.state.inputText))
	}

	render() {
		return (
			<div>
			<input 
				type="text" 
				placeholder = "Type in your todo"
				value = {this.state.inputText}
				onChange={this.handleChange.bind(this)} />
	
			<button onClick={this.handleSubmit.bind(this)}>Submit</button>
			</div>
		)
	}
}

export default TodoInput