import * as types from '../actions-type'
import {getSliders,getLessons} from "../../api/home";

let action ={
    setCurrentLesson(type){
        return (dispath,getstate)=>{
           dispath({type:types.SET_CURRENT_LESSON,lesson:type})
            dispath({type:types.CLEAR_LESSON})
          action.setLesson()(dispath,getstate)//根据所选类型，获取数据
        }
        return
    },
    refresh(){
        return (dispath,getState)=>{
            dispath({type:types.CLEAR_LESSON})
            action.setLesson()(dispath,getState)
        }
    },
    setSliders(){
            return(dispatch)=>{
                dispatch({type:types.GET_SLIDERS})
                dispatch({type:types.GET_SLIDERS_SUCCESS,payload:getSliders()})
            }
    },
    setLesson(){
        return (dispatch,getState)=>{
            let {currentLesson,lesson:{limit,offset,hasMore,loading}}= getState().home
            if(hasMore&&!loading){
                dispatch({type:types.GET_LESSONS})
                dispatch({type:types.GET_LESSONS_SUCCESS,payload:getLessons(limit,offset,currentLesson)})
            }

        }
    }

}
export default action