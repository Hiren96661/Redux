export const incNumber = (payload) => {
    return {
        type: "INCREMENT",
        aa: payload
    }
}
export const decNumber = (payload) => {
    return {
        type: "DECREMENT",
        aa: payload
    }
}