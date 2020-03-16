import { createStore, combineReducers } from 'redux';

import { bugsReducer } from '../bug-tracker/reducers';
import { bugsFilterReducer } from '../bug-tracker/reducers';

import { spinnerReducer } from '../spinner/reducers';

const rootReducer = combineReducers({
    bugsData : bugsReducer,
    spinnerData : spinnerReducer,
    bugsFilter : bugsFilterReducer
});

const appStore = createStore(rootReducer);

window['appStore'] = appStore;

export default appStore;
