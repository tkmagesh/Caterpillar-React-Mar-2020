import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { BugStats, BugSort, BugEdit, BugList } from './views';
import * as bugActionCreators from './actions';

class BugTracker extends Component {
    render = () => {
        const { bugs, toggle, remove, removeClosed, addNew, toggleFilter, bugsFilter, load } = this.props;
        return (
            <Fragment>
                <div>
                    <input type="button" value="LOAD BUGS" onClick={load} />
                </div>
                <label>Apply Filter : </label>
                <input type="checkbox" onChange={toggleFilter} checked={bugsFilter} />
                <br/>
                <BugStats bugs={bugs} />
                <BugSort />
                <BugEdit addNew={addNew} />
                <BugList {...{ toggle, remove, removeClosed, bugs }} />
            </Fragment>
        )
    }
}

function mapStateToProps(storeState){
    const bugs = storeState.bugsFilter ? storeState.bugsData.filter(bug => bug.id % 2 === storeState.spinnerData % 2) : storeState.bugsData ;
    return { bugs : bugs, bugsFilter : storeState.bugsFilter };
}

function mapDispatchToProps(dispatch){
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    return bugActionDispatchers;
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BugTracker);