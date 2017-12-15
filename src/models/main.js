import { routerRedux } from 'dva/router';
import { message } from 'antd';
import {setCookie, getCookie, getTimestamp, encryptByDES } from '../utils/utils';
import {login, register, registerCheckByUser, registerCheckByEmail} from '../services/login/index';

const navs = require('../config/navs.json');
const sid = getCookie('SID_KEY')

export default {
	namespace: 'main',

	state: {
        spinning: true,                // 加载信息
        menus: [],                     // 菜单
        menuLinks: [],                 // sub menu
        currentRoute: '',              // 当前路由
        collapsed: false,              // slider是否展开
        nav: [],                       // 导航信息
        pageStatus: 0,                 // 页面类型，0首页，1登录页，2注册页，3进入主页
        userNameUsed: false,           // 注册页面，用户名是否被占用
        emailUsed: false,              // 注册页面，邮箱是否被占用
        confirmDirty: '',              // 注册页面，输入的密码
        passwordDiff: false,           // 注册页面，第二次输入的密码不一致
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
                    }else if(sid && route == 'login'){
                        dispatch({
                            type: 'setParams',
                            payload:{pageStatus: 1, collapsed: false}
                        });
                    }else if(sid && route == 'register'){
                        dispatch({
                            type: 'setParams',
                            payload:{pageStatus: 2, collapsed: false}
                        });
                    }else if(sid){
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
        /******************************登录、注册相关接口****************************/
        // 登录
		* login({ payload },{ put, call, select }) {
			const data = yield call(login, payload);
			if(data.code === 200){
				message.success('登陆成功')
                // setCookie('SID_KEY', encryptByDES(payload.password) || '');
                setCookie('SID_KEY',payload.password || '');

                yield put({
                    type: 'setParams',
                    payload:{pageStatus: 3}
                });

                yield put(routerRedux.push('/overview'));
			}else{
				message.error(`登录失败 ${data.msg}`)
			}
		},

        * logout({ payload },{ put, call, select }) {
            setCookie('SID_KEY', '', -1);
            yield put(routerRedux.push('/'));
        },
        
        // 注册
        * register({ payload },{ put, call, select }) {
            const data = yield call(register, payload);
            if(data.code === 200){
                message.success('注册成功')
                setCookie('SID_KEY',payload.password || '');

                yield put({
                    type: 'setParams',
                    payload:{pageStatus: 3}
                });

                yield put(routerRedux.push('/overview'));
            }else{
                message.error(`注册失败 ${data.msg}`)
            }
        },

        // 注册check userName
        * registerCheckByUser({ payload },{ put, call, select }) {
            const data = yield call(registerCheckByUser, payload);
            if(data.code == 200){
                yield put({
                    type: 'setParams',
                    payload:{
                        userNameUsed: data.data ? true : false
                    }
                });
            }
        },

        // 注册check email
        * registerCheckByEmail({ payload },{ put, call, select }) {
            const data = yield call(registerCheckByEmail, payload);
            if(data.code == 200){
                yield put({
                    type: 'setParams',
                    payload:{
                        emailUsed: data.data ? true : false
                    }
                });
            }
        }
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