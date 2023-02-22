/*
 * @Author: khwkhwkhw khw97225@163.com
 * @Date: 2023-02-22 15:40:15
 * @LastEditors: khwkhwkhw khw97225@163.com
 * @LastEditTime: 2023-02-22 15:52:10
 * @FilePath: \myfirstreact\src\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 导入react和react-dom
import React from 'react';
import ReactDOM from 'react-dom';

// 创建元素
const title = React.createElement('h1', { id: 'box' }, 'hello react');

// 渲染react元素(固定写法,将创建的元素渲染到项目中public文件夹下的index.html文件id为'root'的div中)
ReactDOM.render(title, document.getElementById('root'));
