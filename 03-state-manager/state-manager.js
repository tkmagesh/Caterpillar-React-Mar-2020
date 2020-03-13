var StateManager = (function(){
    var _currentState = undefined,
        _subscribers = [],
        _reducer = null,
        _init_action = '@@INIT/ACTION';

    function getState(){
        return _currentState;
    }

    function subscribe(callback){
        _subscribers.push(callback);
    }

    function emitChange(){
        _subscribers.forEach(subscriber => subscriber());
    }

    function dispatch(action){
        var newState = _reducer(_currentState, action);
        if (newState === _currentState) return;
        _currentState = newState;
        emitChange();
    }

    function createStore(reducer){
        _reducer = reducer;
        _currentState = _reducer(undefined, _init_action);
        var store = { getState, subscribe, dispatch };
        return store;
    }

    function bindActionCreators(actionCreators, dispatch) {
        var actionDispatchers = {};
        for (let key in actionCreators)
            actionDispatchers[key] = function (...args) {
                const action = actionCreators[key](...args);
                dispatch(action);
            }
        return actionDispatchers;
    }

    return { createStore, bindActionCreators };
})();