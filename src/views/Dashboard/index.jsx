// 导入相关组件
import React, { Component } from 'react'
// 导入UI组件
import { Card, Row, Col } from 'antd'
import Echarts from 'echarts'
import {connect} from 'react-redux'
// 导入资源
import './index.less'
// 导出
 class Dashboard extends Component {
     constructor(props){
         super(props)
         props.Fun('首页/仪表盘')
     }
    // 视图渲染到页面之后执行JS代码
    componentDidMount() {
           // 基于准备好的dom，初始化echarts实例
           var myChart = Echarts.init(this.refs.Tu);

           // 指定图表的配置项和数据
           var option = {
            title: {
                
            },
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['周一','周二','周三','周四','周五','周六','周日']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'邮件营销',
                    type:'line',
                    stack: '总量',
                    areaStyle: {},
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'联盟广告',
                    type:'line',
                    stack: '总量',
                    areaStyle: {},
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'视频广告',
                    type:'line',
                    stack: '总量',
                    areaStyle: {},
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'直接访问',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'搜索引擎',
                    type:'line',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: {normal: {}},
                    data:[820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        };        
        
   
           // 使用刚指定的配置项和数据显示图表。
           myChart.setOption(option);
    }
 
    // 响应JSX对象
    render() { 
        return (
            <div>
                <Card  title="概览"  bordered={false} >
                    <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box" style={{background:'#37E113'}}>爱情里最甜蜜的是</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box" style={{background:'#FFCD42'}}>你对他一见钟情</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box" style={{background:'#DD594D'}}>他早已非你不可</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box" style={{background:'#4A8AF3'}}>一辈子那么长，我都给你</div>
                        </Col>
                    </Row>
                </Card>
                <Card  title="最近浏览量"  bordered={false} >
                    <div ref="Tu" style={{width:600,height:400}}></div>
                </Card>
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
  export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)//小括号写的时组件名