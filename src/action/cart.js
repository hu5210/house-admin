export const el = (i) => {
    return {
        type: 'REDUCE',
        payload: {
            i: i
        }
    }
}
export const de = (i) => {
    // console.log(i)
    return {
        type: 'ADD',
        payload: {
            i: i
        }
    }
}