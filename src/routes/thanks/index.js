import React from 'react'
import { Button, Row, Col } from 'antd'
import {Link} from 'dva/router';
import styles from './index.less';

const Index = () => {
    return (
    	<Row className={`${styles['content-box']}`}>
			<Row className={`${styles['content']}`}>
				<Row>
					<h3>致谢</h3>
					<p>感谢杨斌，让我初识前端</p>
					<p>感谢张凌教授了我很多代码本质的知识</p>
					<p>因为你们</p>
					<p>前端路上，我走的很快，也会很远</p>
				</Row>
			</Row>
		</Row>
    )
}

export default Index;