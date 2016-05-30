import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers'
import logger from 'redux-logger'


// TODO: add middleware
let finalCreateStore = compose(
	applyMiddleware(logger())
)(createStore)

export default function configuration(initialState = { todos: [], user:{} }) {
	return finalCreateStore(rootReducer, initialState)
}