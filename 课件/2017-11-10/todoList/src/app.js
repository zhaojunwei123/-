import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Item from './components/Item';
import Footer from './components/Footer';

import './common/style/index.css';
import './common/style/base.css';

import request from './common/util/todoRequest';

class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            inputVal: '',
            todosData: [],
            view: 'home',

        };
        // 用于知道服务器有没有返回过
        // this.hasServerRes = false;

        this.inputChange = this.inputChange.bind(this);
        this.inputOnEnter = this.inputOnEnter.bind(this);
        this.todoOnChange = this.todoOnChange.bind(this);
        this.deleteToto = this.deleteToto.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
        this.changeView = this.changeView.bind(this);
        this.clearCompleted = this.clearCompleted.bind(this);

        // console.log('App 被构造', 'constructor');

    }
    inputChange(ev){

        let {value} = ev.target;

        this.setState({
            inputVal: ev.target.value
        });
    }

    // 回车, 添加一个 todo
    inputOnEnter(ev){
        if(ev.keyCode!==13) return;

        let {value} = ev.target;
        let {todosData} = this.state;

        if( !value.trim() )return;

        this.setState({
            todosData: [
                ...todosData,
                {
                    id: Math.random(),
                    content: value,
                    isActive: true
                }
            ],
            inputVal: ''
        });
    }

    // 改变一个todo 是否被完成
    todoOnChange(id){
        let {todosData} = this.state;

        console.log(this.state.inputVal);


        let newTodos = todosData.map( (todo, indx)=>{
            if(todo.id === id){
                todo.isActive = !todo.isActive;
            }
            return todo;
        } );

        this.setState({
            todosData: newTodos
        })

    }

    // 删除一个 todo
    deleteToto(id){
        let {todosData} = this.state;
        // filter 回调函数返回 ture, 元素会被保留
        let newTodos = todosData.filter( (todo, indx)=>{
            return todo.id === id ? false : true
        } );

        this.setState({
            todosData: newTodos
        })
    }

    // 全选
    toggleAll(ev){
        let {checked} = ev.target;
        let {todosData} = this.state;

        this.setState({
            todosData: todosData.map(elt =>{
                elt.isActive = !checked;
                return elt;
            })
        })
    }

    // 切换显示不同状态的 todo
    changeView(view){

        this.setState({
            view
        })
    }

    // 清除已完成
    clearCompleted(){
        let {todosData} = this.state;
        // filter 回调函数返回 ture, 元素会被保留
        let newTodos = todosData.filter( (todo, indx)=>{
            return todo.isActive ? true : false
        } );

        this.setState({
            todosData: newTodos
        })
    }

    // componentWillMount(){
    //     console.log('App 组件将要被挂载', 'componentWillMount');
    //
    // }
    //
    // componentDidMount(){
    //     console.log('App 组件 挂载完成','componentDidMount' );
    //
    // }

    // componentWillReceiveProps(){
    //     console.log('奇葩');
    //
    // }
    // 决定组件会不会被更新, 默认返回 true, 表示永远都可以被更新, 如果返回 false, 会阻断 render 的执行, 拦截这一次更新
    // shouldComponentUpdate(nP, nS){
    //     return true;
    // }
    //
    // componentWillUpdate(nProps, nState){
    //
    //     console.log('App 更新💰', 'WillUpdate');
    //
    // }
    //
    // componentDidUpdate(){
    //     console.log('App 更新后', 'DidUpdate');
    // }

    componentDidMount(){
        // request('todo')
        //     .then( (data)=>{
        //         this.hasServerRes = true;
        //         this.setState({
        //             todosData: data
        //         })
        //     })
        //     .catch(()=>{
        //         this.hasServerRes = true;
        //         this.setState({})
        //     })
        // ;
    }

    render(){

        let {inputVal, view, todosData} = this.state;
        let {
            inputChange,
            inputOnEnter,
            todoOnChange,
            deleteToto,
            toggleAll,
            changeView,
            clearCompleted,
            hasServerRes
        } = this;
        // if(!hasServerRes) return <div></div>;
        // 所有的长度
        let todosLength = todosData.length;
        // 有多少个没有被勾选, 假设全部没有勾选
        let leftCount = todosLength;

        // 过滤什么 todo 会被显示, 切换不同的视图
        let filteredTodosData = todosData.filter( (todo)=>{
            let {id, content, isActive} = todo;

            let shouldStay = true;
            // 如果被勾选, 剩余的就减去一个
            if(!isActive) leftCount--;

            switch (view) {
                case "active":
                    if(!isActive===true){
                        shouldStay = false;
                    }
                    break;
                case "completed":
                    if(isActive===true){
                        shouldStay = false;
                    }
                    break;
            }

            return shouldStay;
        } );

        let todosComponent = filteredTodosData.map( (todo)=> {
            let {id, content, isActive} =todo;
            let props = {
                id,
                content,
                isActive,
                todoOnChange,
                deleteToto,
                todo: {...todo}
            };

            return  (
                <Item
                    key={id}
                    { ...props }
                />
            );
        } );

        return (
            <div
                ref={ el=> (this.div = el) }
            >
                <header className="header">
                    <h1>todos</h1>
                    <input
                        className="new-todo"
                        placeholder="What needs to be done?"
                        autoFocus={true}
                        value={inputVal}
                        onChange={inputChange}
                        onKeyDown={inputOnEnter}
                        ref={el=>(this.ipt=el)}
                    />
                </header>

                {todosLength>0 ? (
                    <section
                        className="main"
                        ref="sec"
                    >
                        <input
                            className="toggle-all"
                            type="checkbox"
                            onChange={toggleAll}
                            checked={ leftCount===0 }
                        />
                        <ul
                            className="todo-list"
                            ref={ (el)=>{ this.todoContainer = el } }
                        >
                            {todosComponent}
                        </ul>
                    </section>
                ) : null}

                { todosLength>0 ? (
                    <Footer
                        {...{
                            changeView,
                            view,
                            leftCount,
                            clearCompleted: clearCompleted,
                            // 只要有一个被勾选, 就显示: true
                            // 用所有的 todo 的长度和剩余没有被勾选的 todo 的长度比较
                            // 只要剩余的长度小于全部 todo 的长度, 就说明有todo被勾选
                            showClearButton: todosLength > leftCount
                        }}
                    />
                ) : null}

            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
