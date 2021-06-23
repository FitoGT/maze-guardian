import { combineReducers } from 'redux'
import completeReducer from './count/complete.reducer'
import countReducer from './count/count.reducer'

export default combineReducers({
    count:countReducer,
    complete:completeReducer
})