import * as Types from '../actions-type'
import {reg,login,validate} from '../../api/session'
let action={
    toreg(userinfo,push){
        return(dispath)=>{
            reg(userinfo).then((data)=>{
                if(data.error===1){
                    dispath({type:Types.SET_USER_INFO,payload:data})
                }else{
                    dispath({type:Types.SET_USER_INFO,payload:data})
                    push('/profile')
                }
            })

        }
    },
    tologin(userInfo,push,from){
        return(dispath)=>{
            login(userInfo).then((data)=>{
                if(data.error === 1){
                    dispath({type:Types.SET_USER_INFO,payload:data})
                }else{
                    dispath({type:Types.SET_USER_INFO,payload:data})

                    push(from || '/profile')
                }
            })

        }
    },
    tovalidate(){
        return (dispatch)=>{
            dispatch({type:Types.SET_USER_INFO,payload:validate()})
        }
    }
}
export default action