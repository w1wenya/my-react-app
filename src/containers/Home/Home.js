import React from 'react'
import './index.less'
import HomeHeader from './Homeheader'
export default class Home extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <HomeHeader></HomeHeader>
        )
    }
}