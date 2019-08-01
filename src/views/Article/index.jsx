import React,{Component} from 'react'
import {Card,Button, Modal} from 'antd';
import { Table, Tag,message } from 'antd';
import {getArtapi,deleteArtapi} from '../../api'
import moment  from 'moment';
import {connect} from 'react-redux'
const {confirm}=Modal;
//导出
 class ArticleList extends Component{
  //构造函数
  constructor(props){
    super(props)
    this.state={
     data:[],
     total:0,
     pageSize:5,
      pageon:1,
      loading:false,
    }
   props.Fun('首页/文章列表')
  }
  initData(){
    //发送请求
    this.setState({
      loading:true
    })
    getArtapi(
    )
    .then(res=>{
      this.setState({
        data: res.data.list,
        total: res.data.total,
        loading:false
      })
    })
  }
  //挂载
  componentDidMount(){
    this.initData()
  }
  showConfirm(record,index){
    // console.log(record)
    confirm({
      title:"系统提示",
      content:`确定删除【${record.title}】吗？`,
      onOk:()=>{
        //发送异步请求
        deleteArtapi(
          record.id
        ).then(res=>{
          if(res.meta.state===200){
            let trObj=document.querySelector(`tr[data-row-key='${record.id}']`)
            trObj.style.display='none'
            //移除数据
            message.success('创建成功')
          }else{
            message.error(res.meta.msg)
          }
        })
      },
      oncancel(){}
    })
  }
    render(){
        const columns = [
            {
              title: '编号',
              dataIndex: 'id',
              key: 'id',
            },
            {
              title: '标题',
              dataIndex: 'title',
              key: 'title',
            },
            {
              title: '作者',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '阅读量',
              dataIndex: 'tags',
              key: 'tags',
              render:(text,record,index)=>{
                //text当前内容
                //record当前数据
                  return text>400?<Tag color='red'>{text}</Tag> : <Tag color="green">{text}</Tag>
              }
                 },
            {
              title: '创建于',
              dataIndex: 'time',
              key: 'time',
              render:(text)=>{
                return moment(text).format('YYYY年MM月DD日 hh:mm:ss');
              }
            },
            {
                title: '操作',
                dataIndex: 'action',
                key: 'action',
                render: (text,record) => {
                    return (
                        <div>
                            <Button size="small" type="primary">编辑</Button>
                            <Button size="small" type="danger" onClick={this.showConfirm.bind(this,record)}>删除</Button>
                            {/* record数据 */}
                        </div>
                    )
                }
              },
          ];
          // const data = [
          //   {
          //     key: '1',
          //     id:'1',
          //     title:'记性好的人，远比记性不好的人痛苦',
          //     name: '韩商言',
          //     time:'1997/05/20',
          //     tags: 800,
          //     action:"操作",
          //   },
          //   {
          //     key: '2',
          //     id: '2',
          //     title:'你有多想得到我，我就有多想要你。除了你，谁都不行',
          //     name: '佟年',
          //     time:'1997/05/10',
          //     tags: 600,
          //     action:"操作",
          //   },
          //   {
          //     key: '3',
          //     id:'3',
          //     title:'这里是他的世界，一个陌生的世界。让人仰望，也值得去仰望',
          //     name: 'Gun神',
          //     time:'1997/06/10',
          //     tags: 200,
          //     action:"操作",
          //   },
          // ];
        return(
            <div>
                 <Card title="文章列表" bordered={false} 
                 extra={<a href="http://localhost:3000/#/admin/article/create"><Button>添加</Button></a>}>
                 <Table loading={this.state.loading} columns={columns} dataSource={this.state.data} pagination={{
                      pageSize: this.state.pageSize,
                      total: this.state.total,
                 }}
                 onChange={this.onChangepage.bind(this)}
                 />
                 
    </Card>
            </div>
        )
    }
    //改变分页
    onChangepage(page){
    this.setState({
      //设置组件状态
      pageon:page.current
    },()=>{
      //重新获取数据
      this.initData()
    })
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
export default connect(mapStateToProps, mapDispatchToProps)(ArticleList)//小括号写的时组件名