import { request} from '../../utils'
const {method, headers, api} = require('./api.json');
const config = require('../../utils/config')

const { apiPrefix } = config
// import {setSID} from '../';


/**
 * 登录
 * @returns {Object}
 */
export async function login(data) {
    return request({
    	url: `${apiPrefix}${api[0]}`,
		method: method[1],
	    data
    });
}

/**
 * 注册
 * @returns {Object}
 */
export async function register(data) {
    return request({
    	url: `${apiPrefix}${api[1]}`,
		method: method[1],
	    data
    });
}

/**
 * 注册-查询用户名或邮箱是否已被占用
 * @returns {Object}
 */
export async function registerCheck(data) {
    return request({
    	url: `${apiPrefix}${api[2]}`,
		method: method[1],
	    data
    });
}