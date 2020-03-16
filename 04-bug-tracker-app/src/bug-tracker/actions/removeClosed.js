export function removeClosed() {
    return function(dispatch, getState){
        const bugs = getState().bugsData;
        const bugsToRemove = bugs.filter(bug => bug.isClosed);
        const action = { type: 'REMOVE_BUGS', payload: bugsToRemove };
        return action;
    }
}