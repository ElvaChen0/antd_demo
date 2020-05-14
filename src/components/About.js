import React,{ Component }from 'react'

export default class About extends Component{
    componentDidMount(){
        console.log(this.props.match.params.id)
    }
    render(){
        return(
            <div>
                about page
            </div>
            )


  }
}