import { routerRedux } from 'dva/router'
// import { login } from '../services/login'
import { message } from 'antd'

const navs = require('../config/navs.json');

export default {
	namespace: 'main',

	state: {
        // 加载信息
        spinning: true,
        tip: '加载中',
        menus: [],                     // 菜单
        menuLinks: [],                 //sub
        current: '',
        rootSubmenuKeys: [],
        currentRoute: '',              // 当前路由
        collapsed: false,
        nav: [],                       // 导航信息
        isHomePage: true
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
                            payload: {isHomePage: true}
                        });
                    }else{
                        dispatch({
                            type: 'setParams', 
                            payload: {isHomePage: false}
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