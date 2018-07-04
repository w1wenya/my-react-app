import React from 'react'
import bg from '../../images/template/bg.jpg'
import user from '../../images/template/auditFinish.png'
import './index.less'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import action from '../../store/actions/session'
 class Profile extends React.Component{

    componentDidMount(){
        this.props.tovalidate()
    }
    render(){
        console.log(this.props)
        return (
            <div className="profile">
                <div className="profile-bg">
                    <img src={bg} alt=""/>
                    <div className="avator">
                        <img src={user} alt=""/>

                    </div>
                    {this.props.user? <a href="" className='btn'>{this.props.user}</a> :  <Link href="" className='btn' to="/login">登录</Link>}

                </div>
            </div>
        )
    }
}
export default connect((state)=>({
    ...state.session
}),action)(Profile)