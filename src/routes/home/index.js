import React from 'react'
import { connect } from 'dva'
import { Button, Row, Col } from 'antd'
import {Link} from 'dva/router';
import styles from './index.less';

const Index = ({props,dispatch}) => {
    return (
    	<Row className={`${styles['content-box']}`}>
			<Row className={`${styles['content']}`}>
				<Row className={`${styles['head-img']}`}>
					<img src={require(`../../../public/image/me.jpg`)}/>
				</Row>
				<Row className={`${styles['iconfont-box']}`}>
					<a href="https://github.com/suifengcool" target="_blank">
						<i className={'iconfont icon-github2'} style={{fontSize:'18px',color: '#fff'}}></i>
					</a>
					<Link to="/">
						<i className={'iconfont icon-weixin1'} style={{fontSize:'18px',color: '#fff', marginLeft: 10}}></i>
					</Link>
					<Link to="/">
						<i className={'iconfont icon-qq1'} style={{fontSize:'18px',color: '#fff',marginLeft: 10}}></i>
					</Link>
					<a href="http://mail.qq.com" target="_blank">
						<i className={'iconfont icon-youxiang1'} style={{fontSize:'18px',color: '#fff',marginLeft: 10}}></i>
					</a>
				</Row>
				<Row className={`${styles['name-box']}`}>
					Xu Gang,  Web Developer
				</Row>
				<Row className={`${styles['tag-box']}`} type="flex" justify="center">
					<Col>
						<a href="https://suifengcool.github.io/" target="_blank">Blog</a>
					</Col>
					<Col>
						<Link to={'aboutMe'}>About me</Link>
					</Col>
					<Col><a href="#">Enter</a></Col>
				</Row>
				<Row className={`${styles['thanks-box']}`}>
					<i className={'iconfont icon-icon04'} style={{fontSize:'18px',color: '#666',verticalAlign:'-3%',marginRight: 5}}></i>
					鸣谢
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