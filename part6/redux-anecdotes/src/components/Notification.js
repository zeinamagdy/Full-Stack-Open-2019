import React from 'react'

const Notification = (props) => {
  const votedFlag = props.store.getState().notification !== null ? 1 : 0
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if (votedFlag)
    return (
      <div style={style}>
        {props.store.getState().notification.content
        }
      </div>

    )
  else
    return (<div></div>)
}

export default Notification