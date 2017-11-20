const APIV1 = '/api/v1'

module.exports = {
	// name: 'AntD Admin',
	prefix: 'antdAdmin',
	// footerText: 'Ant Design Admin  © 2017 xugang',
	// logo: '/logo.png',
	// iconFontCSS: '/iconfont.css',
	// iconFontJS: '/iconfont.js',
	// CORS: [],
	// openPages: ['/login'],
	apiPrefix: '/api/v1',
	// APIV1,
	// APIV2,
	api: {
		userLogin: `${APIV1}/user/login`,
		userLogout: `${APIV1}/user/logout`,
		userInfo: `${APIV1}/userInfo`,
	},
}