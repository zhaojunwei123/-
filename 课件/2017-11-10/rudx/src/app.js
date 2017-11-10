// import './loglog';

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

let sub = document.querySelector(".decrement"),
    input = document.querySelector(".input"),
    incrementElt = document.querySelector(".increment"),
    odd = document.querySelector(".odd"),
    async = document.querySelector(".async");


// 定义 reducer
function reducer(state=0, action) {
    let {type} = action;
    switch (type) {
        case 'INCREMENT':
            return ++state;
            break;
        case 'DECREMENT':
            return --state;
            break;
        default:
            return state;
    }
};

// 定义 action creators 专门用来创建 action
function increment() {
    return {type: 'INCREMENT'}
}
function decrement() {
    return {type: 'DECREMENT'}
}

function incrementIfOdd() {

    return function(dispatch, getState) {
        if(getState()%2!==0){
            dispatch(increment())
        }
    }
}
// 绑定好的 action creators
let boundIncrementIfOdd = ()=>store.dispatch(incrementIfOdd());

function asyncIncrement() {
    return function (dispatch) {
        setTimeout(()=>{
            dispatch(increment())
        }, 1000);
    }
}



let store = createStore(reducer, applyMiddleware(thunk));

sub.onclick = ()=>{
    store.dispatch( decrement() );
};


incrementElt.onclick = ()=>{
    store.dispatch(increment());
};
odd.onclick = ()=>{
    boundIncrementIfOdd()
};

async.onclick = ()=>{
    store.dispatch(asyncIncrement());
};

input.value = store.getState();

store.subscribe( ()=>{
    // 这句话的本质: 数据什么样, 界面就是什么样
    input.value = store.getState();
} );
