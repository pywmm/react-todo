import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'



// configruation and create our store
// var store= createStore(reducer,initialState) //[]


class App extends Component {
	render() {
		return (
			<div>
				<h1>Todo List</h1>
				<TodoInput />
				<TodoList /> 
			</div>
		)
	}
}

export default App