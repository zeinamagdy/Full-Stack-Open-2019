import React from 'react';

const Filter = (props) => {
    return (
        <div>
            <span>find countries</span>
            <input type="text" onChange={props.onSearch}></input>
        </div>
    )
}

export default Filter