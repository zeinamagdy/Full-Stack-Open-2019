import React from 'react'

const Filter = (props) => {
    
    return (
        <div>
            filter shown with <input type='text' onChange={props.onSearch} />
        </div>
    )
}
export default Filter