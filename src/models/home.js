import { routerRedux } from 'dva/router'
import { getNavList } from '../services/home'
import { message } from 'antd'

export default {
	namespace: 'home',

	state: {
		isShowThanks: false,
		miniApp: false,
		wechart: false,
		showQQ: false
	},

	subscriptions: {
	    setup({ dispatch, history }){ 
			history.listen((path) => {
				const {pathname} = path;
                (() => {
                    if (pathname == '/') {
                    	console.log('我是首页')
                        dispatch({type: 'getNavList'});
                    }
                })();
            });
	    },
    },

	effects: {
		* getNavList({ payload },{ put, call, select }) {
			const data = yield call(getNavList, payload);
		},
	},

	reducers: {
	    setPrames(state, action) {
	        return { 
	        	...state, 
	        	...action.payload 
	        };
	    },
	},

}