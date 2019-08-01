//导入组件
import React,{Component} from 'react'
import { Layout, Menu, Breadcrumb, Icon, Dropdown,Avatar ,Badge} from 'antd';
import logo from './Logo.png'
import to from './a.jpeg'
import './index.less'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
const { Header, Content, Sider } = Layout;
//导出
 class Dashbord extends Component{
   constructor(props){
     super(props)
     props.Fun('首页')
   }
    render(){
      const menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
              通知
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
             设置
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
              退出
            </a>
          </Menu.Item>
        </Menu>
      );
        return( 
        <Layout>
            <Header className="header adminlogo">
             <Link to='/admin/referral'> <img src={logo} alt="logo图"/></Link>
              <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" href="http://localhost:3000/#/admin/article">
    <Badge count={this.props.num}>
    <Avatar src={to} alt="logo图"/>
      你好:佟年 <Icon type="down" />
      </Badge>
    </a>
  </Dropdown>
            </Header>
            <Layout>
              <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0 }}
                >
                <Menu.Item key='1' >
                    <Link to='/admin/dashboard'><Icon type="dashboard" />仪表盘</Link>
                    </Menu.Item> 
                    <Menu.Item key='2' >
                    <Link to='/admin/article'><Icon type="bars" />文章管理</Link>
                    </Menu.Item> 
                    <Menu.Item key='3' >
                    <Link to='/admin/settings'><Icon type="setting" />设置</Link>
                    </Menu.Item> 
                </Menu>
              </Sider>
              <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>{this.props.nav}</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                  style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                  }}
                >
                 {this.props.children}
                </Content>
              </Layout>
            </Layout>
          </Layout>
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
export default connect(mapStateToProps, mapDispatchToProps)(Dashbord)//小括号写的时组件名