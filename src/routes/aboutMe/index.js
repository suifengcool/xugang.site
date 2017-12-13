import React from 'react'
import { connect } from 'dva'
import { Button, Row} from 'antd'
import styles from './index.less'

const Index = ({props,dispatch}) => {
    return (
    	<div className={`${styles['bg']}`}>
			<div className={`${styles['form']}`}>
			    <div className={styles.logo}>
					<span>ABC</span>
			    </div>
			</div>
		</div>
    )
}

const mapStateToProps = (props) => {
    return {
  		props: props.me
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
		dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);