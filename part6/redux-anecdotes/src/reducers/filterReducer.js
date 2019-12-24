const filterReducer = (state = 'ALL', action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return action.filter
        default:
            return ''
    }

}
export const filterChange = filter => {
    console.log('action', filter)
    return {
        type: 'SET_FILTER',
        filter
    }
}
export default filterReducer