import React from 'react'
//import ReactSwipe from 'react-swipe'
export default class HomeSlider extends React.Component{

    render(){
        let opt = {continuous: false,auto:1000}
        return (

            <div className="home-slider">
                {
                    this.props.list.map((item,index)=>(
                        <div key={index}>
                            <img src={item} alt=""/>
                        </div>
                    ))
                }
                {/*<ReactSwipe className="carousel" swipeOptions={}>*/}
                   {/**/}
                    {/*<div>PANE 1</div>*/}
                    {/*<div>PANE 2</div>*/}
                    {/*<div>PANE 3</div>*/}
                {/*</ReactSwipe>*/}
            </div>

        )
    }
}