import { request} from '../../utils'
const {method, headers, api} = require('./api.json');

// import {setSID} from '../';


/**
 * 登录
 * @returns {Object}
 */
export async function login(body) {
    return request(api[0], {
		method: method[1],
		body: JSON.stringify(body)
    });
}