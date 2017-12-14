import React from 'react'
import { connect } from 'dva'
import {Link} from 'dva/router';
import { Button, Row, Form, Input ,Col} from 'antd'
import styles from '../Login/index.less'
const FormItem = Form.Item

let regex  = new RegExp('^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{8,20}$');

const LoginForm = ({
	props,
    dispatch,
    form: {
	    getFieldDecorator,
	    validateFieldsAndScroll,
    }
}) => {
	const handleOk = ()=>{
		validateFieldsAndScroll((errors, values) => {
		    if (errors) {
				return
		    }
		    dispatch({ type: 'login/login', payload: values })
		})
    }
	
	const formItemLayout = {
		labelCol: {
			xs: { span: 24 },
			sm: { span: 6 },
		},
		wrapperCol: {
			xs: { span: 24 },
			sm: { span: 14 },
		}
	};

    return (
    	<div className={`${styles['bg']}`}>
			<div className={`${styles['form']}`} style={{width: 380, height: 380, top: '35%'}}>
			    <div className={styles.logo}>
					<span>不要心急，只需简单几步</span>
			    </div>
			    <form>
					<FormItem
						{...formItemLayout}
						label="昵称"
						hasFeedback
					>
						{getFieldDecorator('nickName', {
							rules: [{
								required: true, message: '昵称不能为空',
							}],
						})(
							<Input placeholder="请输入您的昵称" />
							)}
					</FormItem>
					<FormItem
						{...formItemLayout}
						label="邮箱"
						hasFeedback
					>
						{getFieldDecorator('email', {
							rules: [{
								type: 'email', message: '不是一个有效的邮箱',
							},{
								max : 200, message : '邮箱长度最大为200'
							},{
								required: true, message: '邮箱不能为空',
							}],
						})(
							<Input placeholder="请输入您的邮箱" />
							)}
					</FormItem>
					<FormItem
						{...formItemLayout}
						label="密码"
						hasFeedback
					>
						{getFieldDecorator('password', {
							rules: [{
								required: true, message: '密码不能为空',
							},{
								pattern:regex, message: '由数字、字母或特殊字符组成，长度8-20位'
							}],
						})(
							<Input type="password" placeholder="请输入您的密码" />
							)}
					</FormItem>

					<FormItem
						{...formItemLayout}
						label="确认密码"
						hasFeedback
					>
						{getFieldDecorator('confirm', {
							rules: [{
								required: true, message: '确认密码不能为空', pattern:regex
							}],
						})(
							<Input type="password" placeholder="请再次输入您的密码" />
							)}
					</FormItem>
					<Row type="flex" justify="space-around">
						<Col span={10}>
						    <Button type="primary" size="large" onClick={handleOk}>
								注册
						    </Button>
					    </Col>
					    <Col span={10} style={{marginLeft: 20}}>
						    <Button size="large" style={{fontSize: 12}}>
								<Link to={'login'}>已有账号，去登录</Link>
						    </Button>
					    </Col>
					</Row>

				</form>
			</div>
		</div>
    )
}

const mapStateToProps = (props) => {
    return {
  		props: props.login
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
		dispatch
    };
}

const Login = Form.create()(LoginForm);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default connect(({ props, dispatch}) => ({ props, dispatch }))(Form.create()(Login))