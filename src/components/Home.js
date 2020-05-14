import React,{ Component }from 'react'
import {Route,NavLink} from 'react-router-dom'
import HomeA from '../home/Homea'
import HomeB from '../home/Homeb'
import {store}from '../redux/store'
import * as action from '../redux/action'

export default class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            num:store.getState()
        }
    }

    componentDidMount(){
        store.subscribe(()=>{this.setState({
            num:store.getState()
        })})
    }
    render(){
        return(
            <div>
                home page---{this.state.num}
                <button onClick={()=>{store.dispatch(action.add(1))}}>点我加1</button>
                <button onClick={()=>{store.dispatch(action.del(1))}}>点我减1</button>
                <NavLink to='/home/homea'>homea</NavLink>
                <NavLink to='/home/homeb'>homeb</NavLink>
                <Route path='/home/homea' component={HomeA}/>
                <Route path='/home/homeb' component={HomeB}/>

            </div>
            )


  }
}