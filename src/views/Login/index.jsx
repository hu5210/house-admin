import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { Card } from 'antd';
import './index.less'
import { getLoginapi } from '../../api'
//导出
class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        getLoginapi(values).then(res => {
          //判断
          if (res.meta.state === 200) {
             //提示信息
             message.success('登录成功')
            if (values.rememder) {//用户是否记住密码
              //localStorage
              localStorage.setItem('username', res.data.username)
              localStorage.setItem('token', res.data.token)
            } else {
              sessionStorage.setItem('username', res.data.username)
              sessionStorage.setItem('token', res.data.token)
            }
            //跳转
            setTimeout(() => {
              this.props.history.push('/admin/dashboard')
            }, 2000)
          } else {
            message.error(res.meta.msg)
          }
        })
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Card title="GL ADMIN" bordered={false} >
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入用户名' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="用户名"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="密码"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>记住我</Checkbox>)}
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
          </Button>
            </Form.Item>
          </Card>
        </Form>
      </div>
    )
  }
}
export default Form.create({ name: 'normal_login' })(Login)