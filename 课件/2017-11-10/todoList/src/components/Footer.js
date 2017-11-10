import React,{Component} from 'react';


export default class extends Component{
    constructor(props){
        super(props);
        this.state={
            h:8
        }

        // console.log( "Footer被构造", 'constructor');

    }

    // componentWillMount(){
    //     console.log('Footer 组件将要被挂载', 'componentWillMount');
    // }
    //
    // componentDidMount(){
    //     console.log('Footer 组件 挂载完成', 'componentDidMount' );
    // }
    //
    // componentWillUnmount(){
    //     console.log('Footer', '被卸载');
    // }

    render(){

        let {changeView, view, leftCount, clearCompleted, showClearButton} = this.props;

        console.log(`Footer render 执行`);

        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{leftCount}</strong> items left
                </span>
                <span>{this.state.h}</span>

                <ul className="filters">
                    <li>
                        <a
                            href="#/"
                            className={ view==='all' ? 'selected': '' }
                            onClick={()=>{
                                // changeView('all');
                                this.setState({
                                    h: Math.random()
                                })
                            }}
                        >
                            All
                        </a>
                    </li>
                    {' '}
                    <li>
                        <a
                            href="#/active"
                            className={ view==='active'? 'selected': '' }
                            onClick={()=>{
                                changeView('active')
                            }}
                        >
                            Active
                        </a>
                    </li>
                    {' '}
                    <li>
                        <a
                            href="#/completed"
                            className={ view==='completed'? 'selected': '' }
                            onClick={()=>{
                                changeView('completed')
                            }}
                        >
                            Completed
                        </a>
                    </li>
                </ul>
                {/* 只要有一个被完成, 就显示 */}
                {
                    showClearButton ? (
                        <button
                            className="clear-completed"
                            onClick={clearCompleted}
                        >
                            Clear completed
                        </button>
                    ) : null
                }

            </footer>
        )
    }
}
