import React,{Component} from 'react'
import { Card,Button , List, Avatar} from 'antd';
import  Photo from './a.jpeg'
//导出
export default class Notify extends Component{
    render(){
        const data = [
            {
              title: 'Ant Design Title 1',
            },
            {
              title: 'Ant Design Title 2',
            },
            {
              title: 'Ant Design Title 3',
            },
            {
              title: 'Ant Design Title 4',
            },
          ];
          
        return(
            <div>
                <Card title="通知中心"  bordered={false} extra={<a href="https://ant.design"><Button>全部标记已读</Button></a>}>
                <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={ Photo} />}
          title={<a href="https://ant.design">{item.title}    
          </a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />,
    </Card>
            </div>
        )
    }
}