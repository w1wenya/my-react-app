import * as types from '../actions-type'
let initState = {
    currentLesson: '0',
    slider: {
    loading: false,
    list: []
    },
    lesson:{
        loading:false,//是否正在加载
        hasMore:true,//有没有更多数据
        offset:0,////    偏移量
         limit:2,//每次限制5条
        list:[]
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
        case types.GET_LESSONS:
            return{ ...state,lesson:{...state.lesson,loading:true}}
        case types.GET_LESSONS_SUCCESS:
            return{...state,lesson:{
                    ...state.lesson,
                    loading:false,
                    hasMore:action.payload.hasMore,
                    list:[...state.lesson.list,...action.payload.list],
                    offset:state.lesson.offset+action.payload.list.length
            }}
        case types.CLEAR_LESSON:
            return{
                ...state,
                lesson:{
                    ...state.lesson,
                    offset:0,
                    list:[]

                }

            }


    }
    return state
}
export default home