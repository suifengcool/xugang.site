/*
*  参考文档：https://github.com/dvajs/dva/blob/master/docs/API_zh-CN.md#model
*/


import dva from 'dva';
import './index.css';

import { browserHistory } from 'dva/router';
import { message } from 'antd';

/*  1.app = dva(opts) 创建应用，返回 dva 实例。(注：dva 支持多实例)
*
*   opts 包含：
*   ①initialState：指定初始数据，优先级高于 model 中的 state，默认是 {};
*   ②history：指定给路由用的 history，默认是 hashHistory,如果要配置 history 为 browserHistory，可以这样：
*       import { browserHistory } from 'dva/router';
*       const app = dva({
*           history: browserHistory,
*       });
*
*   另外，出于易用性的考虑，opts 里也可以配所有的 hooks ，下面包含全部的可配属性：
*   
*   const app = dva({
*       history,
*       initialState,
*       onError,
*       onAction,
*       onStateChange,
*       onReducer,
*       onEffect,
*       onHmr,
*       extraReducers,
*       extraEnhancers,
*   });
*/
const app = dva({
    onError(e) {
    	message.error(e.message, /* duration */3);
    },
    history: browserHistory,
});



/*  2.app.use(hooks) 配置 hooks 或者注册插件。（插件最终返回的是 hooks ）
*   
*   比如注册 dva-loading 插件的例子：  
*   import createLoading from 'dva-loading';
*   ...
*   app.use(createLoading(opts));
*/
// app.use({});



// 3. Model(注册Model)
app.model(require('./models/example'));
app.model(require('./models/count'));



/*  4.app.router(({ history, app }) => RouterConfig) 注册路由表。
*   
*   通常是这样的：
*   import { Router, Route } from 'dva/router';
*   app.router(({ history }) => {
*     return (
*       <Router history={history}>
*         <Route path="/" component={App} />
*       <Router>
*     );
*   });
*   推荐把路由信息抽成一个单独的文件，这样结合 babel-plugin-dva-hmr 可实现路由和组件的热加载，比如：
*   
*   app.router(require('./router'));
*   而有些场景可能不使用路由，比如多页应用，所以也可以传入返回 JSX 元素的函数。比如：
*   
*   app.router(() => <App />);
*/
app.router(require('./router'));



// 5. Start,启动应用
app.start('#root');
