import React,{Component} from "react"
// import { Pagination } from 'antd';
import {Switch,Route,Redirect} from 'react-router-dom'
//导入组件
import ArticleCreate from './views/Article/create'
import ArticleList from './views/Article'
import Dashboard from './views/Dashboard'
import Settings from './views/Settings'
import Frame from './components/Frame'
import Notify from './views/Notify'
import Referral from './views/Referral'
export default class App extends Component{
    //防翻墙
    constructor(props){
        super(props)
        let usename1=localStorage.getItem('username')
        let usename2=sessionStorage.getItem('username')
        if(!usename1 && !usename2){
            this.props.history.push('/login')
        }
    }
    render(){
        return(
            <Frame>
           <Switch>
               <Route path='/admin/article/create' component={ArticleCreate}/>
               <Route path='/admin/article' component={ArticleList} exact/>
               <Route path='/admin/dashboard' component={Dashboard}/>
               <Route path='/admin/settings' component={Settings}/>
               <Route path='/admin/notify' component={ Notify}/>
               <Route path='/admin/referral' component={Referral}/>
               <Redirect to='/404'/>
           </Switch>
           </Frame>
        )
    }
}