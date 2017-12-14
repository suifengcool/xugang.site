const qs = require('qs')
const Mock = require('mockjs')
const config = require('../utils/config')

const { apiPrefix } = config


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
						// res.cookie('token', JSON.stringify({ value: user[0].password}), {
						// 	maxAge: 900000,
						// 	httpOnly: true,
						// })
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