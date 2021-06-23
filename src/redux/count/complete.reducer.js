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
            break;
    
        default:
            return state;
    }
}

export default completeReducer