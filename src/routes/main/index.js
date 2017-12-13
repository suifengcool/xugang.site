import React from 'react'
import { connect } from 'dva'
import {Link} from 'dva/router';
import { Button, Input, Spin, Layout, Menu, Dropdown, Breadcrumb, Icon, Avatar, Row, Col, Badge} from 'antd'

import _styles from './index.css';
import styles from '../../components/component.css';

const {SubMenu} = Menu;
const {Header, Content, Sider, Footer} = Layout;

const clientHeight = document.body.clientHeight;
const minHeight = clientHeight - (56 + 45 + 10 + 15);

const Main = () => {
    
    return (
    	<Layout>
            <div style={{height:clientHeight}}>
                <Header className={_styles.header}>
                    <div className={_styles.logo}>
                        logo区域
                    </div>
                    <div className={_styles['header-right']}>
                        <Row>
                            <Col span={4}>
                                <Badge count={6}>
                                    <Icon type="mail" className={styles['icon-size']}/>
                                </Badge>
                            </Col>
                            <Col span={7} style={{padding: '2px 0'}}>
                                <Icon type="question-circle-o" className={styles['icon-size']}/>&nbsp;帮助
                            </Col>
                            <Col span={5}>
                                <Avatar className={_styles.avatar} size="large" icon="user"/>
                            </Col>
                            <Col span={8}>
                                <Dropdown trigger={['click']} overlay={
                                (
                                    <Menu>
                                        <div className={_styles['dropdown-menu']}>
                                            <Row>
                                                <Col span={8} className={_styles['dropdown-menu-item']}>
                                                    <Link to='/user_info'>
                                                        <div style={{margin: '5px 0'}}>
                                                            <div className={`${_styles['content-center']} ${_styles['icon-1']}`}></div>
                                                        </div>
                                                        <div className={styles['font-color-7f8c97']}>基本信息</div>
                                                    </Link>
                                                </Col>
                                                <Col span={8} className={_styles['dropdown-menu-item']}>
                                                    <Link to='/user_pwd'>
                                                        <div style={{margin: '5px 0'}}>
                                                            <div className={`${_styles['content-center']} ${_styles['icon-2']}`}></div>
                                                        </div>
                                                        <div className={styles['font-color-7f8c97']}>密码修改</div>
                                                    </Link>
                                                </Col>
                                                <Col span={8} className={_styles['dropdown-menu-item']}>
                                                    <div style={{margin: '5px 0'}}>
                                                        <div className={`${_styles['content-center']} ${_styles['icon-3']}`}></div>
                                                    </div>
                                                    <div className={styles['font-color-7f8c97']}>告警配置</div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className={_styles.logout}>
                                            <a onClick={() => {
                                                dispatch({type: 'main/setParams', payload: {spinning: true, tip: '正在退出系统'}});
                                                dispatch({type: 'auth/logout'});
                                            }}>退出系统</a>
                                        </div>
                                    </Menu>
                                )}>
                                <span>
                                    <Icon style={{color: '#999'}} type="caret-down"/>
                                </span>
                                </Dropdown>
                            </Col>
                        </Row>
                    </div>
                </Header>
                <Layout className={_styles['layout-margin-top']}>
                    <Sider
                        className={_styles['sider-bg']}
                        trigger={null}
                        style={{minHeight}}
                        width={200}>
                        <div className={_styles['control-label']}>
                            <span>控制台</span>
                        </div>
                        
                    </Sider>
                    <Layout className={_styles['layout-content-margin-top']} className={_styles['fixIE10Flex']}>
                        <div className={_styles.breadcrumb}>
                            nav区域
                        </div>
                        <Content className={_styles['content-margin-top']} style={{minHeight}}>
                            内容区域
                        </Content>
                    </Layout>
                </Layout>
            </div>
        </Layout>
    )
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


export default Main;
