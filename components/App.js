import React, { Component } from 'react'
import TextInput from './TextInput'
/*class App extends Component {

	render() {
		return <div>This is definitely a React app now!</div>
	}
}*/

var App = React.createClass({

	
	render() {
		return (
			<div>
				<h1>This is App Component!</h1>
				<TextInput />
			</div>
		)
	}
})



export default App