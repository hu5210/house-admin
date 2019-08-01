import React,{Component} from 'react'
import {connect} from 'react-redux'
//导出
 class Settings extends Component{
     constructor(props){
         super(props)
         props.Fun('首页/设置')
     }
    render(){
        return(
            <div>
                设置
            </div>
        )
    }
}
//将仓库中的数据放入组件props中
const mapStateToProps = state => {
    // console.log(state)
    return {
        // 键: state.数据
        num:state.goods.num,
        nav:state.goods.nav
    }
  }
  const mapDispatchToProps= dispatch => {
    return {
        //方法键: (index) => dispatch(increment(index))
        Fun:(v)=>dispatch({
          type:'CDD',
          payload:{
            v:v
          }
        })
    }
  }
  //用connect函数将组件和仓库数据连接在一起：可以互相操作
  export default connect(mapStateToProps, mapDispatchToProps)(Settings)//小括号写的时组件名