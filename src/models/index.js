import { routerRedux } from 'dva/router'
import { getNavList } from '../services/home'
import { message } from 'antd'

export default {
	namespace: 'index',

	state: {
		showHome: true,
	},

	subscriptions: {
	    setup({ dispatch, history }){ 
			history.listen((path) => {
				const {pathname} = path;
                (() => {
                    if (pathname == '/') {
                    	console.log('11111111111')
                        dispatch({
                        	type: 'setPrames',
                        	payload:{showHome: true}
                        });
                    }else{
                    	console.log('2222222222')
						dispatch({
                        	type: 'setPrames',
                        	payload:{showHome: false}
                        });
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
	    	console.log('333333333')
	        return { 
	        	...state, 
	        	...action.payload 
	        };
	    },
	},

}