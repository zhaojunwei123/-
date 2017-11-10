import {bindActionCreators} from 'redux';
import {Provider,connect} from 'react-redux';
import createrStore from './redx/configureStore';
import {increment, decrement, incrementIfOdd, asyncIncrement} from './counterRedux';
const store = createrStore();



class Counter extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let {
            value,
            increment,
            decrement,
            incrementIfOdd,
            asyncIncrement
        } = this.props;
        return (
            <div>
                <button
                    onClick={decrement}
                >-</button>
                <input type="text" value={value}/>
                <button
                    onClick={increment}
                >+</button>
                <button
                    onClick={()=>incrementIfOdd(value)}
                >odd increment</button>
                <button
                    onClick={asyncIncrement}
                >async increment</button>
            </div>
        )
    }
}
// connect 的使用: connect(fn1,fn2)(App)
// fn1: state => object
// fn2: () => object
Counter = connect(
    (state)=>({value:state}),
    (dispatch)=> bindActionCreators({
        increment,
        decrement,
        incrementIfOdd,
        asyncIncrement
    }, dispatch)
)(Counter)

ReactDOM.render(
    <Provider store={store}>
        <Counter/>
    </Provider>
    ,
    document.getElementById('root')
);
