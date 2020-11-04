const initState = {

}

const todoReducer = (state= initState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return state
        case 'DELETE_TODO':

            return state
        case 'COMPLETED_TODO':

            return state
        default:
            return state
    }
}

export default todoReducer;