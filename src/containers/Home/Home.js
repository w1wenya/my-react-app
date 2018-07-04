import React from 'react'
import './index.less'
import HomeHeader from './Homeheader'
import HomeSlider from './HomeSlider'
import HomeList from './HomeList'
import actions from '../../store/actions/home'
import {connect} from 'react-redux'
import {loadMore,pushMore} from '../../util'
import Loading from '../../components/loadding/loading'
 class Home extends React.Component{
    componentDidMount(){
        if(!this.props.slider.list.length)  this.props.setSliders()
            if(!this.props.lesson.list.length)this.props.setLesson()


        console.log(this.refs)
        loadMore(this.x,this.props.setLesson)
        pushMore(this.x,this.props.refresh)
    }
    changeType = (value)=>{
        this.props.setCurrentLesson(value)
        this.props.setCurrentLesson(value)
    }
    constructor(){
        super()
    }
    render(){

        return (

            <div>
                <HomeHeader chageType={this.changeType}></HomeHeader>
                <div className="content" ref={x=>this.x=x}>
                    {
                        this.props.slider.loading?<Loading/>:  <HomeSlider list={this.props.slider.list}></HomeSlider>
                    }
                    <div className="contaner" ref="ben"><h3> <i className="iconfont icon-dingdan"></i>我的课程</h3>
                        {
                            this.props.lesson.loading?<Loading/> :  <HomeList lists={this.props.lesson.list}></HomeList>
                        }
                        <button onClick={()=>{this.props.setLesson()}}>加载更多</button>
                    </div>

                </div>
            </div>
        )
    }
}
export default connect((state)=>({
    ...state.home
}),actions)(Home)
