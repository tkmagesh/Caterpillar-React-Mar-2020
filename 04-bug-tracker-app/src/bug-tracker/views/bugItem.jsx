import React from 'react';

export const BugItem = ({ bug, toggle, remove }) => (
    <li>
        {bug.isClosed ?
            (<span className="bugname closed" onClick={() => toggle(bug)}>
                {bug.name}
            </span>)
            :
            (<span className="bugname" onClick={() => toggle(bug)}>
                {bug.name}
            </span>)
        }
        <div className="datetime">{bug.createdAt.toString()}</div>
        <input type="button" value="Remove" onClick={() => remove(bug)} />
    </li>
);