import React from 'react'
import './index.less'
import {withRouter} from 'react-router-dom'
class Header extends React.Component{
    componentDidMount(){

    }
    back = ()=>{
        this.props.history.go(-1)
    }
    render(){
        return (

                <div className="nav-header">
                    <i className="iconfont icon-guanbi" onClick={this.back}></i>
                    {this.props.title}</div>

        )
    }
}
export default withRouter(Header)