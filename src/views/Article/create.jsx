import React,{Component} from 'react'
import {Card,Button} from 'antd';
import { Form, Icon, Input,message } from 'antd';
import { DatePicker } from 'antd';
import wangEditor from 'wangeditor';
import {postArtapi} from "../../api";
import moment from "moment";
//导出
 class ArticleCreate extends Component{
   constructor(props){
     super(props)
     this.state={
      editor:null,
      loading:false
     }
   }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          //没有错误时，打印数据 
          if (!err) {
            this.setState({
              loading:true
            })
            // console.log('Received values of form: ', values); 
            //values  {time: Moment, title: "2222", author: "14141", tags: "2222"}
            // console.log(this.state.editor.txt.html())
            postArtapi({
             title: values.title,
             author: values.author,
             tags: values.tags,
             time: moment(values.time).valueOf(),
            content: this.state.editor.txt.html(),
            }).then(res=>{
              if(res.meta.state===201){
                message.success('创建成功')
              }else{
                message.error(res.meta.msg)
              }
              this.setState({
                loading:false
              })
            })
          }
        });
      };
      onOk(value) {
        console.log('onOk: ', value);
      }
      onChange(value, dateString) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
      }
      componentDidMount(){
        var E = wangEditor
        var editor = new E(this.refs.editor)
        // 或者 var editor = new E( document.getElementById('editor') )
        editor.create()
        this.setState({
          editor: editor
      })
      }
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div>
                <Card title="文章创建" bordered={false} extra={<a href="http://localhost:3000/#/admin/article"><Button>返回</Button></a>}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Item>
                {getFieldDecorator('time', {
            rules: [{ required: true, message: '请输入标题' }],
          })(
            <DatePicker showTime placeholder="请选择时间" onChange={this.onChange} onOk={this.onOk} />
          )}
    </Form.Item>
        <Form.Item>
          {getFieldDecorator('title', {
            rules: [{ required: true, message: '请输入标题' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'red' }} />}
              placeholder="请输入标题"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('author', {
            rules: [{ required: true, message: '请输入作者' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'red' }} />}
              placeholder="作者名"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('tags', {
            rules: [{ required: true, message: '阅读量' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'red' }} />}
              placeholder="阅读量"
            />,
          )}
        </Form.Item>
        <Form.Item>
        <div ref="editor">
    </div>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={this.state.loading}>
           提交
          </Button>
        </Form.Item>
      </Form>
           </Card>  
            </div>
        )
    }
}
export default Form.create({ name: 'article' })(ArticleCreate);

