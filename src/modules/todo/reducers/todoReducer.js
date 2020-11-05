const initState = {
    sortBy: 'created.asc'
}

const todoReducer = (state= initState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return state
        case 'DELETE_TODO':
            return state
        case 'COMPLETED_TODO':
            return state
        case 'ORDER_BY':
            return {
                ...state, 
                sortBy: action.orderBy
            }
        default:
            return state
    }
}

export default todoReducer;