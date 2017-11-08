

export default class extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props, 'home');
        return (
            <div>首页的内容</div>
        )
    }
}
