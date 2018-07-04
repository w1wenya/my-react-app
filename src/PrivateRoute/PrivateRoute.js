import React from 'react'
import {Route,withRouter} from 'react-router-dom'
import {validate} from "../api/session";

class PrivateRoute extends React.Component{
    componentDidMount(){
        validate().then(result=>{
            if(!result.user){
                this.props.history.push({
                    pathname:'/login',
                    state:{from:this.props.path}

                })
            }else {

            }
        })
    }
    render(){
        return (
            <Route {...this.props}/>
        )
    }
}
export default withRouter(PrivateRoute)