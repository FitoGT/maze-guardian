const INITIAL_STATE = {
    count: 0
}
const countReducer = (state = INITIAL_STATE, action) => { 
    switch (action.type) {
        case 'SET_COUNT':
            return{
                ...state,
                count:action.payload
            }
    
        default:
            return state;
    }
}

export default countReducer