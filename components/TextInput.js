import React, { Component } from 'react'

class TextInput extends Component {

/*	getInitialState() {
		return {
			inputText:'getInitialState'
		}
	}*/

	constructor (props, context) {
		super(props, context)
		this.state = {
			inputText: 'initial text ...'
		}
	}

	render() {
		return (
			<input 
				type="text" 
				placeholder = "This is going to be text"
				value = {this.state.inputText}
			/>
		)
	}
}

export default TextInput