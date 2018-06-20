import React from 'react'
import './index.less'
import HomeHeader from './Homeheader'
import HomeSlider from './HomeSlider'
import actions from '../../store/actions/home'
import {connect} from 'react-redux'
 class Home extends React.Component{
    componentDidMount(){
        this.props.setSliders()
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

            <div>
                <HomeHeader chageType={this.changeType}></HomeHeader>
                <div className="content">
                    {
                        this.props.slider.loading?<div>正在加载</div>:  <HomeSlider list={this.props.slider.list}></HomeSlider>
                    }

                </div>
            </div>
        )
    }
}
export default connect((state)=>({
    ...state.home
}),actions)(Home)
