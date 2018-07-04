
import * as Types from '../actions-type'

let instance = {
    msg:'',
    err:0,
    user:null
}

export default function reducer(state=instance,action) {
    switch (action.type){
        case Types.SET_USER_INFO:
            return {...action.payload}

    }
    return state
}