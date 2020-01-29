import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from "./rootReducers";


const store = createStore(reducers, applyMiddleware(thunk))

export default store
window.store = store
