import { routerRedux } from 'dva/router'
import { message } from 'antd'
import {getMsgList, setMsg} from '../services/msg/index';

export default {
	namespace: 'msg',

	state: {
		msgList: [{
			index: 0,
			createTime: '2017-10-10 10:20',
			type: '技术咨询',
			content: '怎样学习nodejs',
			auth: 'xugang'
		}],                   // 留言列表
		msgListLoading: false,         // 留言列表loading
	},

	subscriptions: {
	    setup({ dispatch, history }){ 
			history.listen((path) => {
				const {pathname} = path;
                (() => {
                    if (pathname == '/msg_board') {
                        // dispatch({type: 'getMsgList'});
                    }
                })();
            });
	    },
    },

	effects: {
		* getMsgList({ payload },{ put, call, select }) {
			const data = yield call(getMsgList, payload);
		},

		* setMsg({ payload },{ put, call, select }) {
			const data = yield call(setMsg, payload);
		}
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