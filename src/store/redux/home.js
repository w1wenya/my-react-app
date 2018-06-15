import * as types from '../actions-type'
let initState = {
    currentLesson:0
}
function home(state=initState,action) {
    switch (action.type){
        case types.SET_CURRENT_LESSON:
            return {...state,currentLesson:action.lesson}
    }
    return state
}
export default home