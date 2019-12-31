import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const votedFlag = props.notification !== null ? 1 : 0
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  }
  if (votedFlag)
    return (
      <div style={style}>
        {props.notification}
      </div>

    )
  else
    return (<div></div>)
}
const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

export default connect(mapStateToProps, null)(Notification)