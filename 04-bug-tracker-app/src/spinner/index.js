import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { spinnerActionCreators } from './actions';


const Spinner = ({ value, up, down }) => (
    <div>
        <h1>Spinner</h1>
        <hr />
        <input type="button" value="DOWN" onClick={down} />
        <span> {value} </span>
        <input type="button" value="UP" onClick={up} />
    </div>
);

function mapStateToProps(storeState){
    const value = storeState.spinnerData;
    return { value : value };
}

function mapDispatchToProps(dispatch){
    const spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, dispatch);
    return spinnerActionDispatchers;
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Spinner);