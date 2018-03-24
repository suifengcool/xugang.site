const jwt = require('jsonwebtoken')
const UserModel = require('../models/user')

class UserController {
    static constructor() {

    }

    /*
    * 用户注册
    */
    static async register(ctx) {
		let { account, passwd ,email} = ctx.request.body
		
		try{
			await UserModel.REGISTER(account, passwd ,email).then(status=>{
				if(!status){
					ctx.send({ 
						code: 500, 
						message: '注册失败', 
						data: null
					})
				}else{
					ctx.send({ 
						code: 200, 
						message: '注册成功', 
						data: {account} 
					})
				}
			})
		}catch(err){
			console.log(err)
		}
    }

    /*
    * 用户注册--check邮箱
    */
    static async registerCheckEmail(ctx) {
		let { account, passwd ,email} = ctx.request.body
		
		try{
			await UserModel.CHECKEMAIL(email).then(status=>{
				if(!status){
					ctx.send({ 
						code: 500, 
						message: '该邮箱已被注册', 
						data: null
					})
				}else{
					ctx.send({ 
						code: 200, 
						message: '该邮箱未被注册', 
						data: {email} 
					})
				}
			})
		}catch(err){
			console.log(err)
		}
    }

    /*
    * 用户注册--check用户名
    */
    static async registerCheckAccount(ctx) {
		let { account, passwd ,email} = ctx.request.body
		
		try{
			await UserModel.CHECKACCOUNT(account).then(status=>{
				if(!status){
					ctx.send({ 
						code: 500, 
						message: '该用户名已被注册', 
						data: null
					})
				}else{
					ctx.send({ 
						code: 200, 
						message: '该用户名未被注册', 
						data: {account} 
					})
				}
			})
		}catch(err){
			console.log(err)
		}
    }

    /*
    * 登录
    */
    static async login(ctx) {
		let { account, passwd } = ctx.request.body
		
		try{
			await UserModel.LOGIN(account, passwd).then(status=>{
				if(!status){
					ctx.send({ 
						code: 500, 
						message: '登录失败', 
						data: null
					})
				}else{
					ctx.send({ 
						code: 200, 
						message: '登陆成功', 
						data: {account} 
					})
				}
			})
		}catch(err){
			console.log(err)
		}
    }
}

module.exports = UserController