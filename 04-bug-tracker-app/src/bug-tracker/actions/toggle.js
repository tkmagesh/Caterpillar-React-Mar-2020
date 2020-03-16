import bugApi from '../services/bugApi';

export function toggle(bugToToggle) {
    const toggledBugData = { ...bugToToggle, isClosed: !bugToToggle.isClosed };
    return bugApi
        .save(toggledBugData)
        .then(toggledBug => {
            const action = { type: 'REPLACE_BUG', payload: toggledBug };
            return action;
        });
    
}