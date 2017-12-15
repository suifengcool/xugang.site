import React from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router';
import { Button, Row, Form, Input, Col } from 'antd'
import {Link} from 'dva/router';
import styles from './index.less'

const FormItem = Form.Item

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
		    dispatch({ type: 'main/login', payload: values })
		})
    }

    return (
    	<div className={`${styles['bg']}`}>
			<div className={`${styles['form']}`} style={{top: '40%'}}>
			    <div className={styles.logo}>
					<span>登录</span>
			    </div>
			    <form>
					<FormItem hasFeedback>
					    {
					    	getFieldDecorator('user_name', {
								rules: [{
									required: true,
							    }],
						    })(<Input size="large" onPressEnter={handleOk} placeholder="Username" />)
						}
					</FormItem>
					<FormItem hasFeedback>
					    {
					    	getFieldDecorator('password', {
								rules: [{
									required: true,
							    }],
						    })(<Input size="large" type="password" onPressEnter={handleOk} placeholder="Password" />)
						}
					</FormItem>
					<Row type="flex" justify="space-around">
						<Col span={10}>
						    <Button type="primary" size="large" onClick={handleOk}>
								登录
						    </Button>
					    </Col>
					    <Col span={10} style={{marginLeft: 20}}>
						    <Button  
						    	size="large" 
						    	onClick={()=>{
									dispatch({
			                            type: 'main/setParams',
			                            payload:{pageStatus: 2, collapsed: false}
			                        });
			                        routerRedux.push('/register')
								}}>
								前去注册
						    </Button>
					    </Col>
					    {/*
					    	<p>
								<span>Username：xugang</span>
								<span>Password：123456</span>
						    </p>
					    */}
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