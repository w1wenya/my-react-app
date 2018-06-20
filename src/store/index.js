import {createStore ,applyMiddleware} from 'redux'
import reducer from './redux/index'
//引入中间件
import reduxThunk from  'redux-thunk' //实现异步请求
import reduxPromise from 'redux-promise'
import reduxLoggerr from 'redux-logger'

let store = createStore (reducer,applyMiddleware(reduxThunk,reduxPromise,reduxLoggerr))
window._store = store
export default store
