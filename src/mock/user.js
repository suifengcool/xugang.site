const qs = require('qs')
const Mock = require('mockjs')
const config = require('../utils/config')

const { apiPrefix } = config

let usersListData = Mock.mock({
	'data|80-100': [
		{
			id: '@id',
			name: '@name',
			nickName: '@last',
			phone: /^1[34578]\d{9}$/,
			'age|11-99': 1,
			address: '@county(true)',
			isMale: '@boolean',
			email: '@email',
			createTime: '@datetime',
			avatar () {
				return Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png', this.nickName.substr(0, 1))
			},
		},
	],
})


let database = usersListData.data

const EnumRoleType = {
	ADMIN: 'admin',
	DEFAULT: 'guest',
	DEVELOPER: 'developer',
}

const userPermission = {
	DEFAULT: {
		visit: ['1', '2', '21', '7', '5', '51', '52', '53'],
		role: EnumRoleType.DEFAULT,
	},
	ADMIN: {
		role: EnumRoleType.ADMIN,
	},
	DEVELOPER: {
		role: EnumRoleType.DEVELOPER,
	},
}

const adminUsers = [{
	id: 0,
	username: 'admin',
	password: 'admin',
	permissions: userPermission.ADMIN,
},{
	id: 1,
	username: 'guest',
	password: 'guest',
	permissions: userPermission.DEFAULT,
},{
	id: 2,
	username: 'xugang',
	password: '123456',
	permissions: userPermission.DEVELOPER,
}]

const queryArray = (array, key, keyAlias = 'key') => {
	if (!(array instanceof Array)) {
		return null
	}
	let data

	for (let item of array) {
		if (item[keyAlias] === key) {
			data = item
			break
		}
	}

	if (data) {
		return data
	}
	return null
}

const NOTFOUND = {
	message: 'Not Found',
	documentation_url: 'http://localhost:8000/request',
}

module.exports = {
    // 登录接口
	[`POST ${apiPrefix}/user/login`] (req, res) {
		const { user_name, password } = req.body;		
		var mysql = require('mysql');
		var connection = mysql.createConnection({
			host: 'sql.m77.vhostgo.com',
			port: 3306,
		    user: 'suifengcool',
		    password: 'xu19880816',
		    database: 'suifengcool'
		});

		connection.connect(function(err){
			if(err){
				console.log('与数据库连接失败')
			}else{
				console.log('与数据库连接成功');
				connection.query('SELECT * from user', function(err, rows, fields) {  
				    if (err) throw err;  
				    const user = rows.filter(item => item.user_name === user_name)
					if (user.length > 0 && user[0].password === password) {
						const now = new Date()
						now.setDate(now.getDate() + 1)
						res.cookie('token', JSON.stringify({ id: user[0].id, deadline: now.getTime() }), {
							maxAge: 900000,
							httpOnly: true,
						})
						res.json({ 
							code: 200,
							data: null,
							msg: '登陆成功',
						})
					} else {
						res.json({ 
							code: 500,
							data: null,
							msg: '账号或者密码错误',
						})
					}
				    
				    connection.end(function(err){
						if(err){
							console.log('关闭数据库操作失败')
						}else{
							console.log('关闭数据库操作成功')
						}
					}) 
	
				    
				});  
			}
		})
	
		
	}
}