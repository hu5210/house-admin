// 1.导入axios模块
import axios from 'axios'
import qs from 'qs' /* eslint no-unused-vars:0 */

// 2.全局配置

    // 2.1 接口地址
    axios.defaults.baseURL = 'http://rap2api.taobao.org/app/mock/226969/';

    // 2.2 请求拦截
    axios.interceptors.request.use(config => {
        // 在发送请求之前做些什么
        config.headers['authorization'] = 'adfdsfdsdsf';
        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error)
    });

    // 2.3 响应拦截
    axios.interceptors.response.use(response => {
        // 对响应数据做点什么
        if (response.code === 200) {
            return response.data
        } else {
            // 对响应错误做点什么 200~400
            return response.data
        }
    }, function (error) {
        // 对响应错误做点什么 500
        console.warn('接口请求失败，发送短信报警')
        return Promise.reject(error)
    });

// 3.定义接口并导出 
/*
  变量名规则：动词+模块+Api
发送请求语法：
export const 变量名 = (参数) => {
    return axios({
        method: 请求方式,
        url: 请求地址,
        params: apiParams 
        data: qs.stringify(apiParams)
    })
}
*/
export const getArtapi = (apiParams) => {
    return axios({
        method: 'get',
        url:'api/v1/article',
        params: apiParams 
    })
}
export const postArtapi = (apiParams) => {
    return axios({
        method: 'post',
        url:'api/v1/article',
        data: qs.stringify(apiParams)
    })
}
export const deleteArtapi = (apiParams) => {
    return axios({
        method: 'delete',
        url:'api/v1/article',
        params: apiParams 
    })
}
export const getLoginapi = (apiParams) => {
    return axios({
        method: 'get',
        url:'api/v1/loginn',
        params: apiParams 
    })
}