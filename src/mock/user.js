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
				    connection.end(); 
				});  
			}
		})
	},

	// 注册接口
	[`POST ${apiPrefix}/user/register`] (req, res) {
		const { user_name, password, email } = req.body;		
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
				var usr = {
					user_name: user_name,
					password: password,
					email: email
				};
				connection.query('insert into user set ?', usr, function(err, result) {
				    if (err) throw err;
				    console.log(result);
				    res.json({ 
						code: 200,
						data: null,
						msg: '注册成功',
					})
					connection.end(); 
				}); 
			}
		})
	},

	// 注册-check user接口
	[`POST ${apiPrefix}/user/registerCheckByUser`] (req, res) {
		const { user_name } = req.body;	
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
				connection.query(`SELECT * from user where user_name = '${user_name}'`, function(err, rows, fields) {  
				    if (err) throw err; 
				    if(rows.length){
				    	res.json({ 
						code: 200,
							data: 1,
							msg: '该用户名已被占用',
						})
				    }else{
				    	res.json({ 
							code: 200,
							data: 0,
							msg: '用户名通过验证',
						})
				    }
				    connection.end() 
				});  
			}
		})
	},

	// 注册-check email接口
	[`POST ${apiPrefix}/user/registerCheckByEmail`] (req, res) {
		const {email } = req.body;	
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
				connection.query(`SELECT * from user where email = '${email}'`, function(err, rows, fields) {  
				    if (err) throw err; 
				    if(rows.length){
				    	res.json({ 
							code: 200,
							data: 1,
							msg: '该邮箱已被占用',
						})
				    }else{
				    	res.json({ 
							code: 200,
							data: 0,
							msg: '邮箱通过验证',
						})
				    }
				    connection.end() 
				});  
			}
		})
	}

}