import React from 'react'
import './index.less'
import HomeHeader from './Homeheader'
import actions from '../../store/actions/home'
import {connect} from 'react-redux'
 class Home extends React.Component{
    componentDidMount(){
        console.log(this.props)
    }
    changeType = (value)=>{
        this.props.setCurrentLesson(value)
        console.log(value)
        console.log(this.props.currentLesson)
    }
    constructor(){
        super()
    }
    render(){
        return (
            <HomeHeader chageType={this.changeType}></HomeHeader>
        )
    }
}
export default connect((state)=>({
    ...state.home
}),actions)(Home)
