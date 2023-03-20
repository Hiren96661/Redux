const initialState = 0;
const changeTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + action.aa;
        case "DECREMENT":
            return state - action.aa;
        default:
            return state;
    }
}
export default changeTheNumber;