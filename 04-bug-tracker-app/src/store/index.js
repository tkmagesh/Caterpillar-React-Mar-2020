import { createStore, combineReducers, applyMiddleware } from 'redux';

import { bugsReducer } from '../bug-tracker/reducers';
import { bugsFilterReducer } from '../bug-tracker/reducers';

import { spinnerReducer } from '../spinner/reducers';

const rootReducer = combineReducers({
    bugsData : bugsReducer,
    spinnerData : spinnerReducer,
    bugsFilter : bugsFilterReducer
});

/* function loggerMiddleware(store){
    return function(next){
        return function(action){
            console.group(action.type);
            console.group('BEFORE');
            console.log(store.getState());
            console.groupEnd();
            console.log(action);
            next(action);
            console.group('AFTER');
            console.log(store.getState());
            console.groupEnd();
            console.groupEnd();
        }
    }
} */

const loggerMiddleware = store => next => action => {
    console.group(action.type);
    console.group('BEFORE');
    console.log(store.getState());
    console.groupEnd();
    console.log(action);
    next(action);
    console.group('AFTER');
    console.log(store.getState());
    console.groupEnd();
    console.groupEnd();
}
   
/* function asyncMiddleware({dispatch}){
    return function(next){
        return function(action){
            if (typeof action === 'function')
                return action(dispatch);
            return next(action);
        }
    }
} */

const asyncMiddleware = ({dispatch, getState}) => next => action => {
    if (typeof action === 'function')
        return action(dispatch, getState);
    return next(action);
};

const promiseMiddleware = ({dispatch, getState}) => next => action => {
    if (action instanceof Promise){
        action.then(actionObj => dispatch(actionObj))
    } else {
        next(action);
    }
}

/* 
Homework:
=========
Organize the middlewares in their respective files
*/
    
const appStore = createStore(rootReducer, applyMiddleware(loggerMiddleware, asyncMiddleware, promiseMiddleware));

window['appStore'] = appStore;

export default appStore;
