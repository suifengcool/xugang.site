import React from 'react';
import { connect } from 'dva';
import styles from './Count.less';

// 声明组件
const Count = ({count, dispatch}) => {
	function handleClick() {
	    dispatch({
	        type: 'count/add'
	    });
	}

	/* <button onClick={() => { dispatch({type: 'count/add'})}}>+</button> */
    return (
	    <div className={styles.normal}>
	        <div className={styles.record}>Highest Record:{count.record} </div>
	        <div className={styles.current}>{count.current}</div>
	        <div className={styles.button}>
	            <button onClick={ handleClick }>+</button>
	        </div>
	    </div>
    );
};

Count.propTypes = {

};

// 如果只是导出一个组件，不加任何事件
// export default Count;

// 将组件与数据处理中心models连接( connect )起来
// 如果需要导出带有 dispatch 驱动数据的行为
export default connect(({ count }) => ({
	count,
}))(Count);