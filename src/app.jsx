import React,{Component} from "react"
import { Pagination } from 'antd';
export default class App extends Component{
    render(){
        return(
            <div><Pagination defaultCurrent={1} total={50} /></div>
        )
    }
}