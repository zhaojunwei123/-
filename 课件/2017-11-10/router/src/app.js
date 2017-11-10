
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
// Router
//     history
import Nav from './component/Nav';
import Home from './container/home/Home';
import Movie from './container/movie/Movie';
import Teleplay from './container/teleplay/Teleplay';

function Gl(){
    return (
        <div>dfsljlkjlk</div>
    )
}

class App extends Component{

    constructor(){
        super();
        this.state = {
            val: ''
        };
        this.changeVal = this.changeVal.bind(this);
    }

    changeVal(val){
        this.setState({val});
    }

    render(){

        let {val} = this.state;
        let {changeVal} = this;

        return (
            <div>

                <Nav/>
                <Route exact={true} path="/" component={Home} />
                
                <Route path="/teleplay" render={

                    ({history, location, match})=>{

                        return true ?  (
                            <div>
                                <h1>这个是剧集</h1>
                                <Teleplay {...{
                                    changeVal,
                                    location
                                }}/>
                            </div>
                        ) : (
                            <Redirect to="/movie"/>
                        )

                    }
                }>

                </Route>
                <Route path="/movie"
                    component={ (props)=>(
                        <Movie val={val} {...props}/>
                    ) }
                />
            </div>
        )
    }
}

ReactDOM.render(
    <Router>
        <App/>
    </Router>
    ,
    document.getElementById('root')
);
