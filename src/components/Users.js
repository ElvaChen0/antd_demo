import React,{ Component }from 'react'

export default class Users extends Component{
    componentDidMount(){
        console.log(this.props.location.query.name)
    }
    render(){
        return(
            <div>
                users page
            </div>
        )
    }
}