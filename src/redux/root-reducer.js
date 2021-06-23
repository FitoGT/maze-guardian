import { combineReducers } from 'redux'
import completeReducer from './complete/complete.reducer'
import countReducer from './count/count.reducer'

export default combineReducers({
    count:countReducer,
    complete:completeReducer
})