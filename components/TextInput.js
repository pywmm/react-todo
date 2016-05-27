import React, { Component } from 'react'
import TextDisplay from './TextDisplay'

class TextInput extends Component {

/*	getInitialState() {
		return {
			inputText:'getInitialState'
		}
	}*/

	constructor (props, context) {
		super(props, context)
		this.state = {
			inputText: 'initial text'
		}
	}

	handleChange (e){
/*		console.log(this);
		console.log(e.target);
		console.log(e.target.value);*/
		this.setState ({
			inputText: e.target.value
		})
	}

	render() {
		return (
			<div>
			<input 
				type="text" 
				placeholder = "This is going to be text"
				value = {this.state.inputText}
				onChange={this.handleChange.bind(this)}
			/>
			<TextDisplay text={this.state.inputText} />
			</div>
		)
	}
}

export default TextInput