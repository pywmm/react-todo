import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'


// TODO: add middleware
let finalCreateStore = compose(
	applyMiddleware(logger())
)(createStore)

export default function configuration(initialState = { todos: []}) {
	return finalCreateStore(reducer, initialState)
}