const notificationReducer = (state = null, action) => {
    switch (action.type) {
        case 'notify':
            return action.note
        case 'clear':
            return null
        default:
            return state
    }
}
export const clearNotification = () => {
    return {
        type: 'clear',
    }
}

export const notify = (note) => {
    return {
        type: 'notify',
        note
    }
}
export const setNotification = (note, time) => {
    return function (dispatch) {
        dispatch(notify(note))
        setTimeout(() => {
            dispatch(clearNotification())
        }, time)
    }
}

export default notificationReducer