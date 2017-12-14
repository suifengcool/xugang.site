import { routerRedux } from 'dva/router'

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
                        dispatch({
                        	type: 'setPrames',
                        	payload:{showHome: true}
                        });
                    }else{
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