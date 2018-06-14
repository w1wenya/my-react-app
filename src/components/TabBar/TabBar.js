import React from 'react'
import './index.less'
import {NavLink} from 'react-router-dom'
export default class TabBar extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <nav className="navbar">
                <NavLink to="/home" > <i className="iconfont icon-shouye"></i>
                 <span>首页</span>

                 </NavLink>
                <NavLink to="/lesson"><i className="iconfont icon-dingdan"></i> 
                <span>我的课程</span>

                </NavLink>
                <NavLink to="/profile"><i className="iconfont icon-geren"></i> 
                <span>个人中心</span>

                </NavLink>
            </nav>
        )
    }
}