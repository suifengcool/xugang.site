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
                    <div className={styles['content-box']} style={{margin: '20px auto 20px',width: 960,border: '1px solid red'}}>
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
                            <ul className={`${_styles['skill-ul']} ${_styles['ul-style']} ${styles['border-bottom']}`}>
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
                            <ul className={`${_styles['ul-style']} ${styles['border-bottom']}`}>
                                <li className={`${styles['border-bottom']}`}>
                                    <h3>2017.9-至今 北京优网科技(武汉)有限公司</h3>
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
                                        <Col span={20} className={`${_styles['project-detail']}`}>
                                            <p><span style={{width: 110}}>云管理平台:</span><a href="http://abc.yunyusec.net/base_market/#/">http://abc.yunyusec.net/base_market/#/</a></p>
                                            <p><span style={{width: 110}}>云管理服务平台:</span><a href="http://abc.yunyusec.net/base_cloud/#/">http://abc.yunyusec.net/base_cloud/#/</a></p>
                                        </Col>
                                    </Row>
                                </li>
                                <li className={`${styles['border-bottom']}`}>
                                    <h3>2017.7-2017.9 华为项目手机工具部(中软国际外派)</h3>
                                    <Row>
                                        <Col span={2}>工作职务:</Col>
                                        <Col span={20}>前端开发工程师</Col>
                                    </Row>
                                    <Row>
                                        <Col span={2}>工作职责:</Col>
                                        <Col span={20}>负责给整个工具部提供前端方面支持</Col>
                                    </Row>
                                    <Row>
                                        <Col span={2}>公司简述:</Col>
                                        <Col span={20}>部门所属华为武汉研究所，是专门提供手机硬件的全部指标在各种使用场景下的大数据分析平台，网站主要包括各模块下问题检索、任务派发、问题追踪等等，包含大量数据表格及业务逻辑。</Col>
                                    </Row>
                                    <Row>
                                        <Col span={2}>参与项目:</Col>
                                        <Col span={20} className={`${_styles['project-detail']}`}>
                                            <p>华为内部手机硬件指标大数据管理平台</p>
                                        </Col>
                                    </Row>
                                </li>
                                <li className={`${styles['border-bottom']}`}>
                                    <h3>2016.10-2017.7 上海魅装网络科技有限公司</h3>
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
                                        <Col span={20} className={`${_styles['project-detail']}`}>
                                            <p>(须在微信开发者工具或手机微信内打开)</p>
                                            <p><span>店族项目用户端:</span><a href="http://wap.dianzu.me">http://wap.dianzu.me</a></p>
                                            <p><span>店族项目门店端:</span><a href="http://shop.dianzu.me">http://shop.dianzu.me</a></p>
                                            <p><span>店族项目代理商端:</span><a href="http://agent.dianzu.me ">http://agent.dianzu.me </a></p>
                                            <p><span>元气街项目大使端:</span><a href="http://agent.beautysite.cn">http://agent.beautysite.cn</a></p>
                                            <p><span>元气街项目用户端:</span><a href="http://wap.yuanqj.cn">http://wap.yuanqj.cn</a></p>
                                        </Col>
                                    </Row>
                                </li>
                                <li className={`${styles['border-bottom']}`}>
                                    <h3>2015.10-2016.9 北京影大人科技有限公司</h3>
                                    <Row>
                                        <Col span={2}>工作职务:</Col>
                                        <Col span={20}>前端开发工程师</Col>
                                    </Row>
                                    <Row>
                                        <Col span={2}>工作职责:</Col>
                                        <Col span={20}>全面负责公司PC端，移动端前端开发</Col>
                                    </Row>
                                    <Row>
                                        <Col span={2}>公司简述:</Col>
                                        <Col span={20}>专注于影视行业的众筹平台，致力于解决中国文化产业的资金流通问题，帮助影视项目寻找到更多的资金，更加帮助更多的个人投资者挖掘优质的影视项目，从而产生应有的收益。</Col>
                                    </Row>
                                    <Row>
                                        <Col span={2}>参与项目:</Col>
                                        <Col span={20} className={`${_styles['project-detail']}`}>
                                            <p><span style={{width: 55}}>移动端:</span><a href="www.yingdaren.com/nwap/list">www.yingdaren.com/nwap/list</a></p>
                                            <p><span style={{width: 55}}>pc端:</span><a href="www.yingdaren.com">www.yingdaren.com</a></p>
                                        </Col>
                                    </Row>
                                </li>
                                <li className={`${styles['border-bottom']}`}>
                                    <h3>2014.8-2015.9 三弦集团-三弦转换（北京）网络科技有限公司</h3>
                                    <Row>
                                        <Col span={2}>工作职务:</Col>
                                        <Col span={20}>前端开发工程师</Col>
                                    </Row>
                                    <Row>
                                        <Col span={2}>工作职责:</Col>
                                        <Col span={20}>全面负责公司PC端，移动端电子商务平台前端开发，及运营管理平台和公司官网开发。平台接入第三方大额支付，及微信支付、登录。</Col>
                                    </Row>
                                    <Row>
                                        <Col span={2}>公司简述:</Col>
                                        <Col span={20}>搭建平台把人们的需求变现或转变成财富，从网上向线下企业直接下订单。</Col>
                                    </Row>
                                    <Row>
                                        <Col span={2}>参与项目:</Col>
                                        <Col span={20} className={`${_styles['project-detail']}`}>
                                            <p><span style={{width: 55}}>移动端:</span><a href="www.sanxiantech.com/?r=wap/union">www.sanxiantech.com/?r=wap/union</a></p>
                                            <p><span style={{width: 55}}>pc端:</span><a href="www.sanxiantech.com">www.sanxiantech.com</a></p>
                                        </Col>
                                    </Row>
                                </li>
                            </ul>
                        </Row>
                        <Row>
                            <div className={`${_styles['sub-title']} ${styles['border-bottom']}`}>
                                <i className={'iconfont icon-xiangmu1'}></i>
                                <span style={{marginTop: 20}}>项目经验</span>
                            </div>
                            <ul className={`${_styles['ul-style']} ${styles['border-bottom']}`}>
                                <li className={`${styles['border-bottom']}`}>
                                    <h3>项目1、优网科技云管理平台及运营服务平台</h3>
                                    <Row>
                                        <Col span={2}>开发时间:</Col>
                                        <Col span={20}>2017年9月-至今</Col>
                                    </Row>
                                    <Row>
                                        <Col span={2}>技术概述:</Col>
                                        <Col span={20}>PC端项目，使用基于React.js和Redux的Dva框架，结合蚂蚁金服的UI框架Antd,项目中使用大量es6新特性，后端语言为Java。</Col>
                                    </Row>
                                </li>
                                <li className={`${styles['border-bottom']}`}>
                                    <h3>项目2、华为内部手机性能大数据分析平台</h3>
                                    <Row>
                                        <Col span={2}>开发时间:</Col>
                                        <Col span={20}>2017年7月-2017年9月</Col>
                                    </Row>
                                    <Row>
                                        <Col span={2}>技术概述:</Col>
                                        <Col span={20}>PC端项目，使用基于JQuery框架，结合easyUI，后端语言为Java。</Col>
                                    </Row>
                                </li>
                                <li className={`${styles['border-bottom']}`}>
                                    <h3>项目3、灵犀旅行公众号(包括导游端和游客端)</h3>
                                    <Row>
                                        <Col span={2}>开发时间:</Col>
                                        <Col span={20}>2017年4月-2017年6月</Col>
                                    </Row>
                                    <Row>
                                        <Col span={2}>技术概述:</Col>
                                        <Col span={20}>微信公众号项目，使用基于Vue2.0+Vuex框架，结合vux和vmui等UI框架，后端语言为Java。</Col>
                                    </Row>
                                </li>
                                <li className={`${styles['border-bottom']}`}>
                                    <h3>项目4、店族项目(包括门店端、用户端以及大使端)</h3>
                                    <Row>
                                        <Col span={2}>开发时间:</Col>
                                        <Col span={20}>2017年4月-2017年7月</Col>
                                    </Row>
                                    <Row>
                                        <Col span={2}>技术概述:</Col>
                                        <Col span={20}>微信公众号及企业号项目，使用基于Vue2.0+Vuex框架，结合vmui的UI框架，后端语言为node.js。</Col>
                                    </Row>
                                </li>
                                <li className={`${styles['border-bottom']}`}>
                                    <h3>项目5、元气街微信公众号(包括门店端和用户端)</h3>
                                    <Row>
                                        <Col span={2}>开发时间:</Col>
                                        <Col span={20}>2016年10月-2017年3月</Col>
                                    </Row>
                                    <Row>
                                        <Col span={2}>技术概述:</Col>
                                        <Col span={20}>微信公众号项目，使用基于Vue2.0+Vuex框架，结合vmui的UI框架，后端语言为node.js。</Col>
                                    </Row>
                                </li>
                                <li className={`${styles['border-bottom']}`}>
                                    <h3>项目6、影大人网站(包括PC端和移动端)</h3>
                                    <Row>
                                        <Col span={2}>开发时间:</Col>
                                        <Col span={20}>2016年4月-2016年9月</Col>
                                    </Row>
                                    <Row>
                                        <Col span={2}>技术概述:</Col>
                                        <Col span={20}>基于JQuery开发，后端语言为PHP和Java。</Col>
                                    </Row>
                                </li>
                                <li className={`${styles['border-bottom']}`}>
                                    <h3>项目7、三弦转换主页(包括PC端和移动端)</h3>
                                    <Row>
                                        <Col span={2}>开发时间:</Col>
                                        <Col span={20}>2015年2月-2015年7月</Col>
                                    </Row>
                                    <Row>
                                        <Col span={2}>技术概述:</Col>
                                        <Col span={20}>基于JQuery开发，后端语言为PHP。</Col>
                                    </Row>
                                </li>
                            </ul>
                        </Row>
                        <Row>
                            <div className={`${_styles['sub-title']} ${styles['border-bottom']}`}>
                                <i className={'iconfont icon-ziwopingjiam4'}></i>
                                <span style={{marginTop: 20}}>自我评价</span>
                            </div>
                            <ul className={`${_styles['skill-ul']} ${_styles['ul-style']} ${styles['border-bottom']}`}>
                                <li>因为热爱，所以上路。一路，求知若渴，虚心若愚！</li>
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