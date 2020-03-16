import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { BugStats, BugSort, BugEdit, BugList } from './views';
import * as bugActionCreators from './actions';

class BugTracker extends Component {
    render = () => {
        const { bugs, toggle, remove, removeClosed, addNew } = this.props;
        return (
            <Fragment>
                <BugStats bugs={bugs} />
                <BugSort />
                <BugEdit addNew={addNew} />
                <BugList {...{ toggle, remove, removeClosed, bugs }} />
            </Fragment>
        )
    }
}

function mapStateToProps(storeState){
    const bugs = storeState.bugsData;
    return { bugs : bugs };
}

function mapDispatchToProps(dispatch){
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    return bugActionDispatchers;
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BugTracker);