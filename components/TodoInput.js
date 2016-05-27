import React, { Component } from 'react'

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

	render() {
		return (
			<div>
			<input 
				type="text" 
				placeholder = "Type in your todo"
				value = {this.state.inputText}
				onChange={this.handleChange.bind(this)} />
	
			<button>Submit</button>
			</div>
		)
	}
}

export default TodoInput