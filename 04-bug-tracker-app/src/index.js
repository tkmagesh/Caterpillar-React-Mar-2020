import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';

import './index.css';
import * as bugActionCreators from './bug-tracker/actions';

import BugTracker from './bug-tracker';
import appStore from './store';

const bugActionDispatchers = bindActionCreators(bugActionCreators, appStore.dispatch);

function renderApp() {
    const bugs = appStore.getState();
    ReactDOM.render(<BugTracker bugs={bugs} {...bugActionDispatchers} />,
        document.getElementById('root'));
}

renderApp();
appStore.subscribe(renderApp);

//import * as serviceWorker from './serviceWorker';
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

//ES6-Modules example
//import * as calc from './calculator';
//import { add } from './calculator';
//import calc from './calculator';
