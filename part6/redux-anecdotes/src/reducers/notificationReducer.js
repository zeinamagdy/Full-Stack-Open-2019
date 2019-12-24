const notificationReducer = (state = null , action) => {
    switch (action.type) {
        case 'voted':
            return action.note
        default:
            return state
    }
}

export const votedNoteChange = note => {
    return {
        type: 'voted',
        note,
    }
}

export default notificationReducer