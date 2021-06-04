// 액션
export const increase = (actionname) => ({type:"INCREMENT", payload:actionname});
export const decrease = (actionname) => ({type:"DECREMENT", payload:actionname});

// 상태
const initstate = {
    actionname: "ready",
    number: 0,
}

// 액션의 결과를 걸러낸다.
const reducer = (state = initstate, action) => {
    switch(action.type) {
        case "INCREMENT" :
            return {number:state.number+1, actionname:action.payload}; // return 되면 그걸 호출한 쪽에서 받는게 아니라 return되는 순간 ui가 변경됨.
        case "DECREMENT" :
            return {number:state.number-1, actionname:action.payload};
        default:
            return state;
    }
}

export default reducer;