import bugApi from '../services/bugApi';

export function addNew(newBugName) {
    const newBugData = {
        id: 0,
        name: newBugName,
        isClosed: false,
        createdAt: new Date()
    };
    return bugApi
        .save(newBugData)
        .then(newBug => {
            const action = { type: 'ADD_NEW_BUG', payload: newBug };
            return action;
        })
    
}