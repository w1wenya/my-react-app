import * as types from '../actions-type'
let initState = {
    currentLesson: 0,
    slider: {
    loading: false,
    list: []
}
}
function home(state=initState,action) {
    switch (action.type){
        case types.SET_CURRENT_LESSON:
            return {...state,currentLesson:action.lesson}
        case types.GET_SLIDERS:
            return{ ...state,slider:{...state.slider,loading:true}}
        case types.GET_SLIDERS_SUCCESS:
            return{...state,slider:{loading:false,list:action.payload}}
    }
    return state
}
export default home