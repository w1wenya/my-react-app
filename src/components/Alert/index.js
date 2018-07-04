import React from 'react'
import './index.less'
import {connect} from 'react-redux'
import action from "../../store/actions/session";
class Alert extends React.Component{
    render(){
        return (

                this.props.error===1?<div>{this.props.msg}</div>:<span></span>


        )
    }
}
export default connect((state)=>({
    ...state.session
}))(Alert)