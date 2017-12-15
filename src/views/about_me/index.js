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
                                    <Col span={11}>
                                        <h1>许刚</h1>
                                        <h2>Tel:13797071376</h2>
                                        <h2>Email:371801080@qq.com</h2>
                                        <h2>个人网站:<a href="https://xugang.site">https://xugang.site</a></h2>
                                    </Col>
                                    <Col span={12}>
                                        <h1>前端开发</h1>
                                        <h2>前端经验: 3.5年</h2>
                                        <h2>期望薪资:面议</h2>
                                        <h2>技术博客:<a href="https://suifengcool.github.io/">https://suifengcool.github.io/</a></h2>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col><h2>88.8.16&nbsp;&nbsp;&nbsp;湖北武汉&nbsp;&nbsp;12年毕业于湖北工业大学&nbsp;|&nbsp;金融学&nbsp;|&nbsp;本科&nbsp;|&nbsp;六级</h2></Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <div className={`${_styles['sub-title']} ${styles['border-bottom']}`}>
                                <i className={'iconfont icon-jineng'}></i>
                                <span style={{marginTop: 20}}>专业技能</span>
                            </div>
                            <ul className={`${_styles['skill-ul']} ${styles['border-bottom']}`}>
                                <li>1、熟练切图，将UI设计转化为符合W3C规范的DIV+CSS静态页面，确保浏览器及平台的性能和兼容性，并有良好的编码习惯;</li>
                                <li>2、精通 HTML(5)、CSS(3)、JavaScript，对es6新特性有较深的理解和大量的实践;</li>
                                <li>3、熟练使用JQuery、Zepto.js、Boostrap、Vue.js、Vuex、React.js、Redux以及基于React和Redux的Dva框架;</li>
                                <li>4、熟练使用easyUI、WeUI、SUI、VMUI、VUX、Antd、ElementUI等开发类库和UI框架;</li>
                                <li>5、熟练运用Git、Svn、Webpack、gulp、Sublime Text3和PS等开发工具;</li>
                                <li>6、熟练使用Sass、Less、Stylus等预处理器;</li>
                                <li>7、可以基于node.js搭建后端服务，并且有实际全栈开发经验。</li>
                            </ul>
                        </Row>
                        <Row>
                            <div className={`${_styles['sub-title']} ${styles['border-bottom']}`}>
                                <i className={'iconfont icon-bag-line'} style={{verticalAlign:'2%'}}></i>
                                <span style={{marginTop: 20}}>工作经验</span>
                            </div>
                            <ul className={`${_styles['exp-ul']} ${styles['border-bottom']}`}>
                                <li>
                                    <h3>2016.10-2017.6 上海魅装网络科技有限公司</h3>
                                    <Row>
                                        <Col span={2}>工作职务:</Col>
                                        <Col span={20}>前端开发工程师</Col>
                                    </Row>
                                    <Row>
                                        <Col span={2}>工作职责:</Col>
                                        <Col span={20}>开发稳定产品，为公司发展打下基础，代理加用户的逻辑模式给公司带来一定收益。个人负责前端框架下全部页面的整体开发，包括静态页面与动态页面的交互实现。</Col>
                                    </Row>
                                    <Row>
                                        <Col span={2}>公司简述:</Col>
                                        <Col span={20}>公司是采用线上代理分销和终端用户的运营模式，对应开发产品有大使端(企业号)和用户端(公众号)，里面嵌入公司购物平台，产品逻辑包括用户管理，大使管理，整套电商购物结算流程，大使收益分配。前端采用vue2.0框架，通过flexible和rem布局，通过750px标准设计稿适配所有终端机型。</Col>
                                    </Row>
                                    <Row>
                                        <Col span={2}>参与项目:</Col>
                                        <Col span={20}>
                                            <p></p>
                                        </Col>
                                    </Row>
                                </li>
                            </ul>
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