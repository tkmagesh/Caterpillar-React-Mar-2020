import React, { Component, Fragment } from 'react';
import { BugStats, BugSort, BugEdit, BugList } from './views';

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

export default BugTracker;