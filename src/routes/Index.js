import React from 'react';
import { connect } from 'dva'

import Home from './Home';
import Main from './Main';
import Login from './Login';
import Register from './Register';

const Index = (main,dispatch) => {
let {pageStatus} = main.main

	return (
		<div style={{height: '100%'}}>
			{(()=>{
                switch(pageStatus){
                	case 0:return <Home />
                	case 1:return <Login />
                	case 2:return <Register />
                    case 3:return <Main />
                }
            })()}
		</div>
	);
}

const mapStateToProps = (props) => {
	return {
		main: props.main
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		dispatch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
