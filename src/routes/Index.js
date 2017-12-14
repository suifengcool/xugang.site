import React from 'react';
import { connect } from 'dva'

import Home from './Home';
import Main from './Main';

const Index = (main,dispatch) => {
const {isHomePage} = main.main
	return (
		<div style={{height: '100%'}}>
			{isHomePage? <Home />:<Main />}
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
