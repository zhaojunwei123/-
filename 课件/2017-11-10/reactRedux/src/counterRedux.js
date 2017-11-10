
const INCREMENT = "INCREMENT/reactRedux/Counter",
    DECREMENT = "DECREMENT/reactRedux/Counter";


// reducer
export default function counter(state=0, action) {
    let {type} = action;
    switch (type) {
        case INCREMENT:
            return ++state;
            break;
        case DECREMENT:
            return --state;
            break;
        default:
            return state;
    }
}

// action creators
export const increment = ()=>({type: INCREMENT});
export const decrement = ()=>({type: DECREMENT});

export const incrementIfOdd = (value)=> dispatch => {
    if(value%2!==0){
        dispatch( increment() );
    }
};

export const asyncIncrement = ()=> dispatch => {
    setTimeout( ()=>{
        dispatch(increment());
    }, 1000)

};
