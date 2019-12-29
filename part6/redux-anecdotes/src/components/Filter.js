import React from 'react'
import { connect } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'
const Filter = (props) => {
    const handleChange = (event) => {
        const filterValue = event.target.value
        props.filterChange(filterValue)
    }
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            filter <input onChange={handleChange} />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
}
const mapDispatchToState = {
    filterChange
}
export default connect(mapStateToProps, mapDispatchToState)(Filter)