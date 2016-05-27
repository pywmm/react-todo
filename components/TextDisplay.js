import React, { Component } from 'react'

class TextDisplay extends Component {

	render() {
		return <div>I'm displaying the parent:{this.props.text}</div>
	}
}

export default TextDisplay