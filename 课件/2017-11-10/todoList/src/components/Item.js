import React,{Component} from 'react';

export default class extends Component{

    constructor(props){
        super(props);
        this.deleteToto = this.deleteToto.bind(this)

        console.log( "Item", props.content, 'constructor');

        this.a= false;
    }

    deleteToto(){
        let {id, deleteToto} = this.props;
        deleteToto(id);
    }

    // componentWillMount(){
    //     let {content} = this.props;
    //     console.log('Item 组件将要被挂载', content, 'componentWillMount');
    // }

    // componentDidMount(){
    //     let {content} = this.props;
    //     console.log('Item 组件 挂载完成', content, 'componentDidMount' );
    // }
    //
    // componentDidMount(){
    //     console.log('Item 组件 挂载完成','componentDidMount' );
    //
    // }

    // componentWillUpdate(nProps, nState){
    //
    //     console.log(this.props, nProps, '新旧 props');
    //     console.log('Item 更新💰', 'WillUpdate');
    // }
    //
    // componentWillReceiveProps(){
    //     console.log('Item 奇葩');
    // }

    // shouldComponentUpdate(nP, nS){
    //     return false;
    // }

    // componentWillUnmount(){
    //     console.log('Item', this.props.content, '被卸载');
    // }
    //
    componentDidMount(){
        setTimeout(()=>{
            if(this.a===true) return;
            this.setState({})
        }, 5000)
    }

    componentWillUnmount(){
        this.a=true;
    }

    render(){
        console.log('Item render');
        let {
            id,
            content,
            isActive,
            todoOnChange,
            todo
        } = this.props;

        let {deleteToto} = this;

        console.log(`Item ${content} render 执行`);

        return (
            <li
                className={isActive ? '' : "completed"}
            >
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={!isActive}
                        onChange={ ()=>todoOnChange(id) }
                    />
                    <label
                        onClick={()=>{
                            todo.isActive = false;
                        }}
                    >
                        {content}
                    </label>
                    <button
                        className="destroy"
                        onClick={ deleteToto }
                    />
                </div>
                <input
                    ref="editField"
                    className="edit"
                />
            </li>
        )
    }
}
