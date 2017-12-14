import React from 'react';
import {connect} from 'dva';
import {Row, Col, Spin, Radio} from 'antd';

import _styles from './index.less';
import '../../components/component-antd.less';
import styles from '../../components/component.css';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const Index = ({overview, dispatch}) => {

    return (
        <div className={`${styles['content']} ${styles['margin-top-none']}`}>
            <div className={styles['content-box-gray']}>
                <div className={styles['content-box']}>
                    <Row className={styles['border-bottom']} style={{marginTop: '-10px'}}>
                        <div className={styles['content-title']}>
                            <h2 className={styles['title-left']}>个人简历</h2>
                        </div>
                    </Row>
                    <div className={styles['content-box']} style={{paddingLeft: '120px',paddingRight: '120px'}}>
                        <Row gutter={10} type="flex" justify="space-between" className={styles['border-bottom']}>
                            <Col span={4}>
                                <img src={require(`../../../public/image/xugang6.jpg`)} style={{width: '100%'}}/>
                            </Col>
                            <Col span={18} className={_styles['marginBottom18']}>
                                <Row type="flex" justify="space-between">
                                    <Col span={10}>
                                        <h1>许刚</h1>
                                        <h2>Tel:13797071376</h2>
                                        <h2>Email:371801080@qq.com</h2>
                                    </Col>
                                    <Col span={10}>
                                        <h1>前端开发</h1>
                                        <h2>前端经验: 3.5年</h2>
                                        <h2>期望薪资:面议</h2>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col><h2>88.8.16&nbsp;&nbsp;&nbsp;湖北武汉&nbsp;&nbsp;12年毕业于湖北工业大学&nbsp;|&nbsp;金融学&nbsp;|&nbsp;本科&nbsp;|&nbsp;六级</h2></Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
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