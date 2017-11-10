import {createStore} from 'redux';

// 实现一个打印应用,
//     点击一个按钮, 打印一个数字
//     每次点击, 数字增加

// 使用 redux 的实现思路
//     1.确定出应用的数据结构,(状态的结构): number
//     2.创建出 store,
//         定义 reducer
//         定义 action
//     3. 发布一个动作, 让数据改变

let async = document.querySelector(".async");

// 声明 reducer, 是一个函数
function logData( state , action ) {
    // state = 0
    // {type: 'INCREMENT'}
    let {type} = action;

    switch (type) {
        case 'INCREMENT':
            return ++state;
            break;
        default:
            return state;
    }
}

// 创建 store, 用来维护状态
let store = createStore( logData, 0);

async.onclick = ()=>{
    // 只要发布一个 action 才能改变状态
    store.dispatch( {type: 'INCREMENT'} );
};
// 注册一个监听器, 在 action 发起之后, reducer 计算完成之后执行
store.subscribe( ()=>{
    console.log(store.getState());
} );
