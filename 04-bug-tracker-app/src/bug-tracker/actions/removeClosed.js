export function removeClosed(bugs /* To be fixed */) {
    const bugsToRemove = bugs.filter(bug => bug.isClosed);
    const action = { type: 'REMOVE_BUGS', payload: bugsToRemove };
    return action;
}