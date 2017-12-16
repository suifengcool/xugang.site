import React from 'react';
import {connect} from 'dva';
import {Row, Col, Spin, Radio, Table} from 'antd';

import '../../components/component-antd.less';
import styles from '../../components/component.css';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const Index = ({msg, dispatch}) => {
    const {msgList, msgListLoading} = msg
    const params ={
        columns: [{
            key: 'index', 
            title: '序号', 
            dataIndex: 'index'
        },{
            key: 'createTime', 
            title: '留言时间', 
            dataIndex: 'createTime'
        },{
            key: 'type', 
            title: '分类', 
            dataIndex: 'type'
        },{
            key: 'content', 
            width: '40%',
            title: '内容', 
            dataIndex: 'content'
        },{
            key: 'auth', 
            title: '留言者', 
            dataIndex: 'auth'
        },{
            key: 'operation', 
            title: '操作',
            render: (text, record) => {
                return (
                    <div>查看详情</div>
                )
            }
        }],
        dataSource: msgList,
        loading: msgListLoading,
        bordered: true
    }

    return (
        <div className={`${styles['content']} ${styles['margin-top-none']}`}>
        	<div className={styles['content-box-gray']}>
                <div className={styles['content-box']}>
            		<Row gutter={10} type="flex" justify="space-between" className={styles['border-bottom']} style={{marginBottom: 20}}>
                        <Col span={5} className={styles['content-title']}>
                            <h2 className={styles['title-left']}>留言板</h2>
                        </Col>
                    </Row>
                    <Table {...params} />
                </div>
                <div className={styles['content-box']}>
                    <Row gutter={10} type="flex" justify="space-between" className={styles['border-bottom']}>
                        <Col span={5} className={styles['content-title']}>
                            <h2 className={styles['title-left']}>给我留言</h2>
                        </Col>
                    </Row>
                    <Row>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </Row>
                </div>
        	</div>
        </div>
    );
};

Index.propTypes = {};

const mapStateToProps = (props) => {
    return {
        msg: props.msg
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);