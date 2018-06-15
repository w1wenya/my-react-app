import * as types from '../actions-type'
let action ={
    setCurrentLesson(type){
        return {type:types.SET_CURRENT_LESSON,lesson:type}
    }
}
export default action