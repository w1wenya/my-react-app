import React from 'react'
import Header from '../../components/Header/Header'
class Detail extends React.Component{

    render(){
        console.log(this.props.location)
        let lessson = this.props.location.state;
        if(!lessson){
            lessson = {}
        }
        let {video,poster} = lessson
        return (
            <div>
                <Header title="详情页"></Header>
                <div className="content">
                    <video src={video}></video>
                </div>
            </div>
        )
    }
}
export default Detail