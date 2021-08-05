const INITIAL_STATE = {
    userEmail:'',
    userLogin: 0
};

function userReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case 'LOG_IN':
            return {...state, userLogin:1, userEmail: action.userEmail}
        case 'LOG_OUT':
            return {...state, userLogin:0, userEmail: action.null}
        default:
            return state;
    }

}
export default userReducer;