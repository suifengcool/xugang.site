import { request} from '../../utils'
const {method, headers, api} = require('./api.json');
const config = require('../../utils/config')

const { apiPrefix } = config
// import {setSID} from '../';


/**
 * 获取留言列表
 * @returns {Object}
 */
export async function getMsgList(data) {
    return request({
    	url: `${apiPrefix}${api[0]}`,
		method: method[1],
	    data
    });
}

/**
 * 发表留言
 * @returns {Object}
 */
export async function setMsg(data) {
    return request({
    	url: `${apiPrefix}${api[1]}`,
		method: method[1],
	    data
    });
}