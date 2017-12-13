import React from 'react';
import dynamic from 'dva/dynamic'
import { Router, Route, Switch } from 'dva/router';

let config = [
    '/home/index',              // 首页
    '/aboutMe',                 // 关于我
    '/main',                    // 主页
];

// 定义路由
const routes = [];

// 解析路由配置，添加进routes
config.forEach((value, index, arr) => {
    routes.push({
        path: value.replace(/(\/index|home\/index)$/g, ''),
        component: () => import(
        	'./routes' + value.replace(/\/(\:|\?)[A-z]+$/g, '')
        )
    })
})


const RouterConfig = ({ history }) => {
	return (
		<Router history={history}>
			<Switch>
				{
					routes.map(({ path, ...dynamics }, key) => (
						<Route key={key}
							exact
							path={path}
							component={dynamic({
								...dynamics,
							})}
						/>
					))
				}
			</Switch>
		</Router>
	);
}

export default RouterConfig;
