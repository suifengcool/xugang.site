import { routerRedux } from 'dva/router';
import { message } from 'antd';

import {login} from '../services/login';

const navs = require('../config/navs.json');

export default {
	namespace: 'main',

	state: {
        spinning: true,                // 加载信息
        tip: '加载中',
        menus: [],                     // 菜单
        menuLinks: [],                 //sub
        current: '',
        rootSubmenuKeys: [],
        currentRoute: '',              // 当前路由
        collapsed: false,
        nav: [],                       // 导航信息
        pageStatus: 0
    },

	subscriptions: {
	    setup({dispatch, history}) {
            history.listen((path) => {
                (() => {
                    const {pathname} = path;
                    const currentRoute = pathname.substr(1);
                    const route = currentRoute;
                    if (route == '/' || route == '') {
                        dispatch({
                            type: 'setParams',
                            payload:{pageStatus: 0, collapsed: false}
                        });
                    }else if(route == 'login'){
                        dispatch({
                            type: 'setParams',
                            payload:{pageStatus: 1, collapsed: false}
                        });
                    }else if(route == 'register'){
                        dispatch({
                            type: 'setParams',
                            payload:{pageStatus: 2, collapsed: false}
                        });
                    }else{
                        dispatch({
                            type: 'setParams',
                            payload:{pageStatus: 3}
                        });
                    }
                    dispatch({
                        type: 'setParams',
                        payload: {
                            currentRoute,
                            nav: navs[route]
                        }
                    });
                })();
            })
        }
    },

	effects: {
		* login({ payload },{ put, call, select }) {
			const data = yield call(login, payload);
			if(data.code === 200){
				message.success('登陆成功')
			}else{
				message.error('登录失败')
			}
		},
	},

	reducers: {
	    setParams(state, {payload}) {
            return {
                ...state,
                ...payload
            };
        },
	},

}