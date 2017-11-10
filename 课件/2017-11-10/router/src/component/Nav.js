import {Link, NavLink, withRouter} from 'react-router-dom';

let style = {
    background: 'red'
}

class Nav extends Component{

    constructor(props){
        super(props);
        this.state = {
            // 保存当前所在页面
            from: props.location.pathname,
            curtView: '/'
        };
        this.fromChange = this.fromChange.bind(this);
    }

    // componentWillReceiveProps(nP){
        // console.log(nP.history.location === this.props.history.location);
        // console.log(nP.location === this.props.location);
        // this.setState({from: nP.location.pathname})
    // }

    // 点击的时候, 更新到所跳转到的页面
    fromChange(from){

        this.setState({from});

    }

    render(){
        let {history, location} = this.props;

        let {fromChange} = this;
        let {from} = this.state;

        return (
            <ul>
                <li>
                    <NavLink
                        activeStyle={style}
                        to="/"
                        exact
                        onClick={()=>{
                            fromChange('/')
                            history.push('/', {from})
                        }}
                    > 首页</NavLink>
                </li>
                <li><NavLink
                    activeStyle={style}
                    to={{
                        pathname: '/teleplay',
                        search: '?a=4&b=8&h=89',
                        hash: '#dfkj',
                        state: {
                            from
                        }
                    }}
                    onClick={()=>fromChange('/teleplay')}
                    > 剧集</NavLink></li>

                <li>
                    <NavLink
                        activeStyle={style}
                        to={{
                            pathname: '/movie',
                            state:{from}
                        }}
                        onClick={()=>fromChange('/movie')}
                    > 电影</NavLink>
                </li>
            </ul>
        )
    }
}

export default withRouter(Nav);
