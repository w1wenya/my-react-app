import React from 'react'
import ReactDOM from 'react-dom'
import store from './store/index'
import {Provider} from 'react-redux'
import './commen/index.less'
import Home from './containers/Home/Home'
import async from './asyncComponent'
let Profile = async(()=>import('./containers/Profile/Profile'))

import Lesson from './containers/Lesson/Lession'
import Login from './containers/Login/Login'
import Detail from './containers/Detail/Detail'
import TabBar from './components/TabBar/TabBar'
import PrivateRoute from './PrivateRoute/PrivateRoute'


import {HashRouter, Route, Switch} from 'react-router-dom';


ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <div>
                <Switch>
                    <Route path="/home" component={Home} />
                    <PrivateRoute path="/lesson" component={Lesson} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/login" component={Login} />
                    <Route path="/detail/:lessonId" component={Detail} />
                </Switch>
                <TabBar></TabBar>
            </div>

        </HashRouter>
    </Provider>

  , document.getElementById('root'))

