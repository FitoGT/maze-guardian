const INITIAL_STATE = {
    complete: false
}
const completeReducer = (state = INITIAL_STATE, action) => { 
    switch (action.type) {
        case 'SET_COMPLETE':
            return{
                ...state,
                complete:action.payload
            }
    
        default:
            return state;
    }
}

export default completeReducer