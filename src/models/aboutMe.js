import { routerRedux } from 'dva/router'
import { message } from 'antd'

export default {
	namespace: 'me',

	state: {},

	subscriptions: {
	    setup({ dispatch, history }){ 

	    },
    },

	effects: {
		
	},

	reducers: {
	    save(state, action) {
	        return { 
	        	...state, 
	        	...action.payload 
	        };
	    },
	},

}