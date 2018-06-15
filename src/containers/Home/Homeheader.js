import React from 'react'
import logo from '../../images/logo.png'
import Transition from 'react-transition-group/Transition';
const duration = 300;
//动画的样式
const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = {
    entering: { opacity: 0 },
    entered:  { opacity: 1 },
};

export default class Home extends React.Component{
    constructor(){
        super()
        this.state = {isShowa:false}
    }
    changeShow(){
        this.setState({
            isShowa:!this.state.isShowa
        })
    }
    changeType=(e)=>{
        this.props.chageType(e.target.dataset.type)
        this.changeShow()
    }
    render(){
        return (
            <div className="home-header">
                <div className="home-header-logo">
                    <img src={logo} alt="" /> 
                    <div className="home-header-btn"  onClick={()=>{
                        this.changeShow()
                    }}>
                    {this.state.isShowa? <i className="iconfont icon-guanbi"></i>:<i className="iconfont icon-iconfonticonliebiao1"></i>}
                       
                       
                    </div>
                    <Transition in={this.state.isShowa} timeout={duration} onEnter={(node)=>{
                        node.style.display = "block"
                    }} onExited={(node)=>{
                        node.style.display = "none"
                    }}>
                        {
                            (state)=>(
                                <ul className="home-header-list" style={{
                                    ...defaultStyle,
                                    ...transitionStyles[state]
                                }}   onClick={this.changeType.bind(this)}>
                                    <li data-type="0">全部课程</li>
                                    <li data-type="1">react课程</li>
                                    <li data-type="2">vue课程</li>
                                </ul>
                            )

                        }
                    </Transition>


                </div>
            </div>
        )
    }
}