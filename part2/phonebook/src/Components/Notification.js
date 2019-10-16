import React from 'react';

const Notification = (props) => {
    const messageStyle = {
        color: props.type === 'error' ? 'red' : 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    if (props.message === '')
        return null
    return (
        <div style={messageStyle}>
            {props.message}
        </div>
    )
}
export default Notification;