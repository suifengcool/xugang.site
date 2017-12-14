import React from 'react'
import { connect } from 'dva'
import {Link} from 'dva/router';
import { Button, Input, Spin, Layout, Menu, Dropdown, Breadcrumb, Icon, Avatar, Row, Col, Badge} from 'antd'

import _styles from './index.css';
import styles from '../../components/component.css';
import {components} from '../../router.mapping';

const {SubMenu} = Menu;
const {Header, Content, Sider, Footer} = Layout;

const clientHeight = document.body.clientHeight;
const minHeight = clientHeight - (56 + 45 + 10 + 15);

const Main = ({main, dispatch}) => {
    
    const {currentRoute, nav, collapsed} = main;

    const menus = [{
        children:[],
        id:1,
        key:"0_1",
        link:"overview",
        sign:"overviewIcon",
        txt:"主页"
    },{
        children:[],
        id:2,
        key:"1_1",
        link:"tech_stack",
        sign:"manageIcon",
        txt:"技术栈"
    },{
        children:[{
            key: "2_2", 
            id: 3, 
            txt: "PC端", 
            link: "project/pc"
        },{
            key: "2_3", 
            id: 4, 
            txt: "移动端", 
            link: "project/mobile"
        },{
            key: "2_4", 
            id: 5, 
            txt: "微信公众号", 
            link: "project/wechart_public"
        },{
            key: "2_5", 
            id: 6, 
            txt: "微信小程序", 
            link: "project/wechart_miniapp"
        }],
        id:7,
        key:"2_1",
        link:"project/pc",
        sign:"applicationIcon",
        txt:"项目展示"
    },{
        children:[],
        id:8,
        key:"4_1",
        link:"member",
        sign:"aboutMeIcon",
        txt:"成为会员"
    },{
        children:[],
        id:9,
        key:"5_1",
        link:"msg_board",
        sign:"aboutMeIcon",
        txt:"留言板"
    },{
        children:[],
        id:10,
        key:"6_1",
        link:"about_me",
        sign:"aboutMeIcon",
        txt:"About me"
    },{
        children:[],
        id:11,
        key:"7_1",
        link:"",
        sign:"aboutMeIcon",
        txt:"首页"
    }]

    const onCollapse = () => {
        dispatch({
            type: 'main/setParams',
            payload: {
                collapsed: !collapsed
            }
        })
    }

    return (
    	<Layout>
        
            <div style={{height:clientHeight}}>
                <Header className={_styles.header}>
                    <div className={_styles.logo}>
                        <img src={require(`../../../public/image/me.jpg`)}/>
                    </div>
                    <div className={_styles['header-right']}>
                        <Row>
                            <Col span={4}>
                            </Col>
                            <Col span={7} style={{padding: '2px 0'}}>
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
                                                        <div className={styles['font-color-7f8c97']}>会员中心</div>
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
                                                    
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className={_styles.logout}>
                                            <a onClick={() => {
                                                dispatch({type: 'main/setParams', payload: {spinning: true, tip: '正在退出'}});
                                                dispatch({type: 'auth/logout'});
                                            }}>退出</a>
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
                        style={{minHeight}}
                        width={200}
                        collapsible
                        collapsed={collapsed}
                        onCollapse={onCollapse}
                    >
                        <div className={_styles['control-label']}>
                            <span>控制台</span>
                        </div>
                        <Menu
                            className={_styles['sider-bg']}
                            theme="dark"
                            mode="inline"
                        >
                            {
                                menus.length && menus.map((m, i) => {
                                    const {txt, link, children, key, sign} = m;
                                    return (
                                        children.length > 0 
                                        ? (
                                            <SubMenu 
                                                key = {`sub${key}`}
                                                title = {
                                                    <Link to={`/${link}`} style={{color:'#eee'}}>
                                                        <Row>
                                                            <Col span={4} style={{padding: '10px 0'}}>
                                                                <div className={_styles[`${sign}`]}></div>
                                                            </Col>
                                                            {
                                                                !collapsed ?
                                                                <Col span={20}>
                                                                    {txt}
                                                                </Col>
                                                                : ''
                                                            }
                                                            
                                                        </Row>
                                                    </Link>
                                                }
                                            >
                                                {
                                                    children.map((c, j) => {
                                                        return (
                                                            <Menu.Item key={c.key}>
                                                                <Link to={`/${c.link}`} style={{color:'#eee'}}>
                                                                    {c.txt}
                                                                </Link>
                                                            </Menu.Item>
                                                        )
                                                    })
                                                }
                                            </SubMenu>
                                        ) 
                                        : (
                                            <Menu.Item className={_styles['sider-bg']} key={key}>
                                                <Link to={`/${link}`} style={{color:'#eee'}}>
                                                    <Row>
                                                        <Col span={4} style={{padding: '5px 0'}}>
                                                            <Icon className={_styles[`${sign}`]}/>
                                                        </Col>
                                                        {
                                                            !collapsed ?
                                                            <Col span={20}>
                                                                {txt}
                                                            </Col>
                                                            : ''
                                                        }
                                                    </Row>
                                                </Link>
                                            </Menu.Item>
                                        )
                                    )
                                })}
                        </Menu>
                    </Sider>
                    <Layout className={_styles['layout-content-margin-top']} className={_styles['fixIE10Flex']}>
                        <div className={_styles.breadcrumb}>
                            {
                                nav.map((d, i) => {
                                    return (
                                        <div key={i}>{d}</div>
                                    )
                                })
                            }
                        </div>
                        <Content className={`${_styles['content-margin-top']} ${styles['popup-container']}`}
                            style={{minHeight}} id='popup-container'>
                            {
                                components[currentRoute] || ''
                            }
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
