import { combineReducers } from 'redux'
import { product } from './reducers/product'

const reducers = combineReducers({
  product,
})
export default reducers
