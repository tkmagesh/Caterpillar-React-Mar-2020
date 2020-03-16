import bugApi from '../services/bugApi';

function getLocalBugs(){
    const localBugs = [
        {
            "id": 1,
            "name": "Local Bug - 1",
            "isClosed": false,
            "createdAt": "2020-03-10T23:05:06.003Z"
        },
        {
            "id": 2,
            "name": "Local Bug - 2",
            "isClosed": true,
            "createdAt": "2020-03-10T23:05:08.280Z"
        }];

    return localBugs;
}

/* function getServerBugs(){
    return axios
        .get('http://localhost:3030/bugs')
        .then(response => response.data)
        
} */
//using the thunk like middleware
/* export function load(){
    //const bugs = getLocalBugs();
    return function(dispatch){
        const promiseWithBugs = getServerBugs();
        promiseWithBugs
            .then(function(bugs){
                const action = { type: 'LOAD_BUGS', payload: bugs };
                dispatch(action);
            })
    };
    
} */

/* export function load() {
    const promiseWithBugs = getServerBugs();
    const promiseWithAction = promiseWithBugs
        .then(function (bugs) {
            const action = { type: 'LOAD_BUGS', payload: bugs };
            return action;
        });
    return promiseWithAction;
} */

export function load() {
    return bugApi
        .getAllBugs()
        .then(function (bugs) {
            const action = { type: 'LOAD_BUGS', payload: bugs };
            return action;
        });
}