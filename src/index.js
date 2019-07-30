import React from 'react'
import {render} from 'react-dom'
import App from './app'
import { LocaleProvider } from 'antd';
import zhCN from 'antd/es/locale-provider/zh_CN';
render(<LocaleProvider locale={zhCN}>
<App/>
 </LocaleProvider>
,document.querySelector('#root'))