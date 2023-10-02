// increase count
// decrease count
//reset count

// action object has a property called 'type'
export const increaseCount = () => {
    return {
        type : 'count/increased'

    }
}
export const decreaseCount = () => {
    return {
        type : 'count/decreased'
    }

}

export const resetCount = () => {
    return {
        type : 'count/reset'
    }

}