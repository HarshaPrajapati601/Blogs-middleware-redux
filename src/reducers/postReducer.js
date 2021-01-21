export default (state = [], action) => {
    console.log("state",state)
    switch (action.type) {
        case 'FETCH_POSTS':    
            return action.payload;
        default:
            return state;
    }

}