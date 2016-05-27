import React, { Component } from 'react'

class TextDisplay extends Component {

	handleClick () {
		console.log('button click');
		this.props.deleteLetter();
	}

	render() {
		return (
			<div>
				<div>displaying the parent:{this.props.text}</div>
				<button onClick={this.handleClick.bind(this)}>delete one letter</button>
			</div>
		)
	}
}

export default TextDisplay