import { routerRedux } from 'dva/router'
import { message } from 'antd'

export default {
	namespace: 'main',

	state: {},

	subscriptions: {
	    setup({ dispatch, history }){ 

	    },
    },

	effects: {
		
	},

	reducers: {
	    setPrams(state, action) {
	        return { 
	        	...state, 
	        	...action.payload 
	        };
	    },
	},

}