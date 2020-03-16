export function bugsFilterReducer(currentState = false, action){
    if (action.type === 'TOGGLE_FILTER'){
        return !currentState;
    }
    return currentState
}