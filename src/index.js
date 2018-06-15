import React from 'react'
import ReactDOM from 'react-dom'
import store from './store/index'
import {Provider} from 'react-redux'
import './commen/index.less'
import Home from './containers/Home/Home'
import Profile from './containers/Profile/Profile'
import Lesson from './containers/Lesson/Lession'

import TabBar from './components/TabBar/TabBar'

import {HashRouter, Route, Switch} from 'react-router-dom';


ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <div>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/lesson" component={Lesson} />
                    <Route path="/profile" component={Profile} />
                </Switch>
                <TabBar></TabBar>
            </div>

        </HashRouter>
    </Provider>

  , document.getElementById('root'))

