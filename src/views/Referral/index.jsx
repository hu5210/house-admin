import React, { Component } from 'react'
import { Card, Button } from 'antd';
import { Tabs } from 'antd';

const { TabPane } = Tabs;
//导出
export default class Referral extends Component {
    render() {
        return ( <div>
                <Card title="走进GLADMIN" bordered={false} extra={<a href="http://localhost:3000/#/admin/article"><Button>返回</Button></a>}>
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="Tab 1" key="1">
                            Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </Card>
            </div>)
    }
    callback(key) {
        console.log(key);
    }
}