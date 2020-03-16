import React from 'react';

const Spinner = ({ value, up, down }) => (
    <div>
        <h1>Spinner</h1>
        <hr />
        <input type="button" value="DOWN" onClick={down} />
        <span> {value} </span>
        <input type="button" value="UP" onClick={up} />
    </div>
);

export default Spinner;