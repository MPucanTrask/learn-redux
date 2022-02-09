import { combineReducers } from 'redux'
import CakeReducer from "./Cake/CakeReducer";

const rootReducer = combineReducers({
  cake: CakeReducer
})

export default rootReducer