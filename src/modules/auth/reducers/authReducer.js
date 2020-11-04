const initState = {
    errorMessage : null
}

const authReducer = (state= initState, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                errorMessage: null
            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                errorMessage: action.err.message
            }
        case 'SIGNOUT_SUCCESS':
            return {
                ...state, 
                errorMessage: null
            }
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                errorMessage: null
            }
        case 'REGISTER_ERROR':
            return {
                ...state, 
                errorMessage: action.err.message
            }
        case 'FACEBOOK_LOGIN':
            return state
        default:
            return state
    }
}

export default authReducer;