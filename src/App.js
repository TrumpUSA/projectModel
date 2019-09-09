import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Loadable from 'react-loadable'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'

import Home from './containers/Home'
import PrivateRoute from './components/PrivateRoute'
import DingLogin from './components/DingLogin'
import NotFound from './containers/NotFound'

import './theme/app.scss'

library.add(fab, fas);

//组件按需加载
const Manage = Loadable({
  loader: () => import('./containers/Manage'),
  loading: () => null
})
const Login = Loadable({
  loader: () => import('./containers/Login'),
  loading: () => null
})
// const DashBoard = Loadable({
//   loader: () => import('./containers/DashBoard'),
//   loading: () => null
// })
const PrintPreview = Loadable({
  loader: () => import('./components/PrintPreview'),
  loading: () => null
})
const PrintReportPreview = Loadable({
  loader: () => import('./components/PrintPreview/PrintReport'),
  loading: () => null
})

class App extends Component {
  render() {

    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/dingLogin" component={DingLogin}></Route>
          <PrivateRoute path="/manage" component={Manage}></PrivateRoute>
          {/*<PrivateRoute exact path="/DashBoard" component={DashBoard}></PrivateRoute>*/}
          <PrivateRoute exact path="/printPreview/:uid" component={PrintPreview}></PrivateRoute>
          <PrivateRoute exact path="/print/report/:bizUid/:knowledgeGroupUid"
                        component={PrintReportPreview}></PrivateRoute>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    )
  }
}

export default App
