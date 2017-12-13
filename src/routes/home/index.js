import React from 'react'
import { connect } from 'dva'
import { Button, Row, Col } from 'antd'
import styles from './index.css';

const Index = ({
	props,
    dispatch
}) => {
	
    return (
    	<Row className={`${styles['content-box']}`}>
			<Row className={`${styles['content']}`}>
				<Row className={`${styles['head-img']}`}>
					<img src={require(`../../../public/image/me.jpg`)}/>
				</Row>
				<Row className={`${styles['head-img']}`}>
					<i className={'iconfont icon-weixin'}></i>
				</Row>
			</Row>
		</Row>
    )
}

const mapStateToProps = (props) => {
    return {
  		props: props.home
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
		dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);