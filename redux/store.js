import { createStore } from 'redux'
import reducer from './reducer'

// TODO: add middleware

export default function configuration(initialState = { todos: []}) {
	return createStore(reducer, initialState)
}