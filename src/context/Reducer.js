const Reducer = (state, action) => {
    switch(action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
                error: false,
            };
        case "LOGIN_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: true,
            };   
        case "LOGIN_SUCCESS":
            return{
                user: action.payload,
                isFetching: false,
                error: false
            };

        case "LOGOUT": 
            return {
                user: null,
                isFetching: false,
                error: false,  
            };
           
        case "UPDATE_START":
            return{
                ...state,
                isFetching:true
            };

        default:
            return state;    


    }
};

export default Reducer;