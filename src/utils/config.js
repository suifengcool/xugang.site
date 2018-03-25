const APIV1 = '/api/v1'

module.exports = {
	prefix: 'antdAdmin',
	apiPrefix: 'http://123.206.201.196:6000',
	api: {
		userLogin: `${APIV1}/user/login`,
		userLogout: `${APIV1}/user/logout`,
		userInfo: `${APIV1}/userInfo`,
		getList: `${APIV1}/getList`,
	},
}