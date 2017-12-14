import React from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router';
import { Button, Row, Col } from 'antd'
import {Link} from 'dva/router';
import styles from './index.less';

const Home = ({props,dispatch}) => {
	const {isShowThanks, miniApp, wechart, showQQ} = props;

	const qcord = require('../../../public/image/qcord.png')
	const wechartapp = require('../../../public/image/wechartapp.jpg')

	const showThanks = () => {
		dispatch({
			type:'home/setPrames',
			payload:{
				isShowThanks :!isShowThanks,
				showQQ: false
			}
		})
	}

	const showQcord = (type) => {
		if(type){
			dispatch({
				type:'home/setPrames',
				payload:{
					miniApp : !miniApp,
					wechart: false
				}
			})
		}else{
			dispatch({
				type:'home/setPrames',
				payload:{
					miniApp : false,
					wechart: !wechart
				}
			})
		}
	}

	const showQQHandle = () => {
		dispatch({
			type:'home/setPrames',
			payload:{
				showQQ: !showQQ
			}
		})
	}

    return (
    	<Row className={`${styles['content-box']}`}>
			<Row className={`${styles['content']}`}>
				<Row className={`${styles['head-img']}`}>
					<img src={require(`../../../public/image/me.jpg`)}/>
					{
						miniApp || wechart
						? <img src={miniApp? wechartapp: qcord} alt=""  style={{marginLeft: '30px'}}/>
						: ''
					}
				</Row>
				<Row className={`${styles['iconfont-box']}`}>
					<a href="https://github.com/suifengcool" target="_blank">
						<i className={'iconfont icon-github2'} style={{fontSize:'18px',color: '#fff'}}></i>
					</a>
						<i className={'iconfont icon-xiaochengxu'} onClick={()=>{showQcord(1)}} style={{fontSize:'18px',color: '#fff',marginLeft: 10, cursor: 'pointer'}}></i>
						<i className={'iconfont icon-weixin1'} onClick={()=>{showQcord(0)}}  style={{fontSize:'18px',color: '#fff', marginLeft: 10, cursor: 'pointer'}}></i>
						<i className={'iconfont icon-qq1'} onClick={()=>{showQQHandle()}} style={{fontSize:'18px',color: '#fff',marginLeft: 10, cursor: 'pointer'}}></i>
					<a href="http://mail.qq.com" target="_blank">
						<i className={'iconfont icon-youxiang1'} style={{fontSize:'18px',color: '#fff',marginLeft: 10}}></i>
					</a>
				</Row>
				<Row className={`${styles['name-box']}`}>
					Xu Gang,  Web Developer
				</Row>
				<Row style={{textAlign: 'center',color: '#fff', fontSize: '16px',marginTop: '10px'}}>
					{
						showQQ
						? <span>QQ: 371801080<span style={{marginLeft: '10px',fontSize: '12px'}}>请备注来源site</span></span>
						: ''
					}
				</Row>
				<Row className={`${styles['tag-box']}`} type="flex" justify="center">
					<Col>
						<a href="https://suifengcool.github.io/" target="_blank">Blog</a>
					</Col>
					<Col>
						<Link to={'about_me'}>About me</Link>
					</Col>
					<Col onClick={()=>{
						dispatch({
                            type: 'main/setParams',
                            payload:{pageStatus: 1, collapsed: false}
                        });
                        routerRedux.push('/login')
					}}><a style={{height: 34}}>Enter<i className={'iconfont icon-jiantouyoushuang-'} style={{fontSize:'14px',verticalAlign:'-3%',marginLeft: 3}}></i></a></Col>
				</Row>
				<Row className={`${styles['thanks-words']}`}>
					{
						isShowThanks
						?<div>
							<p>感谢杨斌</p>
							<p>让我初识前端</p>
							<p>感谢张凌</p>
							<p>教授了我很多代码本质的知识</p>
							<p>因为你们</p>
							<p>前端路上</p>
							<p>我走的很快，也会很远</p>
						</div>
						: ''
					}
				</Row>
				<Row className={`${styles['thanks-box']}`}>
					<i className={'iconfont icon-icon04'} style={{fontSize:'18px',color: '#666',verticalAlign:'-3%',marginRight: 5}}></i>
					<span onClick={()=> {showThanks()}}>鸣谢</span>
				</Row>
				<Row className={`${styles['plusIcon']}`}>
				<Link to={'msg_board'}>
					<i className={'iconfont icon-liuyan'} style={{fontSize: '20px'}}></i>
					<p className={'plusText'}>点击给我留言</p>
				</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);