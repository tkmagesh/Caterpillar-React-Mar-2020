import bugApi from '../services/bugApi';

export function remove(bugToRemove) {
    return bugApi
        .remove(bugToRemove)
        .then(() => {
            const action = { type: 'REMOVE_BUG', payload: bugToRemove };
            return action;
        });
}