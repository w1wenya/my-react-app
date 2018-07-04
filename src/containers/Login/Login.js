import React from 'react'
import './index.less'
import action from '../../store/actions/session'
import {connect} from 'react-redux'
import Header from "../../components/Header/Header";
import Alert from '../../components/Alert/index'
 class Login extends React.Component{
     reg(){
        this.props.toreg({username:this.username.value,password:this.password.value},this.props.history.push)
     }
     login(){
         let from = this.props.location.state  && this.props.location.state.from
         this.props.tologin({username:this.username.value,password:this.password.value},this.props.history.push,from)
     }
    render(){
        return (
            <div className="login">
                <Header title="登录"/>
                <ul className="content" ref="in">
                    <li><input type="text" ref={(username)=>{return this.username=username}} /></li>
                    <li><input type="text" ref={(password)=>this.password=password}/></li>
                    <li><button onClick={this.login.bind(this)}>登录</button></li>

                    <li><button onClick={this.reg.bind(this)}>注册</button></li>
                    <li><Alert></Alert></li>

                </ul>
            </div>
        )
    }
}
export default connect((state)=>({
    ...state.reg
}),action)(Login)