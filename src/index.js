import React from 'react'
import {render} from 'react-dom'
import { LocaleProvider } from 'antd';
import zhCN from 'antd/es/locale-provider/zh_CN';
//导入路由
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
//导入组件
import App from './app'
import Login from './views/Login/index'
import NotFound from './views/NotFound/index'
import {Provider} from 'react-redux'
import store from './store'
render(
<LocaleProvider locale={zhCN}>
<Provider store={store}>
<Router>
    <Switch>
        <Route path='/admin' component={App}/>
        <Route path='/login' component={Login}/>
        <Route path='/404'  component={NotFound}/>
        <Redirect to='/404'/>
    </Switch>
</Router>
</Provider>
 </LocaleProvider>
,document.querySelector('#root'))