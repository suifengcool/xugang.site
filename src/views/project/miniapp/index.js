import React from 'react';
import {connect} from 'dva';
import {Row, Col, Spin, Radio} from 'antd';

import '../../../components/component-antd.less';
import styles from '../../../components/component.css';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const Index = ({overview, dispatch}) => {

    return (
        <div className={`${styles['content']} ${styles['margin-top-none']}`}>
        	<div className={styles['content-box-gray']}>
        		<Row gutter={10} type="flex" justify="space-between">
                    项目展示-小程序
                </Row>
        	</div>
        </div>
    );
};

Index.propTypes = {};

const mapStateToProps = (props) => {
    return {
        overview: props.overview
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);