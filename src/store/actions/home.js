import * as types from '../actions-type'
import {getSliders} from "../../api/home";

let action ={
    setCurrentLesson(type){
        return {type:types.SET_CURRENT_LESSON,lesson:type}
    },
    setSliders(){
            return(dispatch)=>{
                dispatch({type:types.GET_SLIDERS})
                dispatch({type:types.GET_SLIDERS_SUCCESS,payload:getSliders()})
            }
    }
}
export default action