// reducer is a faction that takes 2 parameters
// current state, action
// based on this action it retuens the new state



const counter = {
    count : 0,
}

// if-else, swtch-case
function counterReducer(state, action){
    if(action.type === 'count/increased'){
        return {
            ...state,
            count : state.count + 1,           

        }
    }else if(action.type === 'count/decreased') {
        return {
            ...state,
            count : state.count - 1,
        }    

    }else {
        return {
            ...state,
            count : 0,
        }
    }

}


export default counterReducer;