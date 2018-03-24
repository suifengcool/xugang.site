const jwt = require('jsonwebtoken')
const UserModel = require('../models/user')

class UserController {
    static constructor() {

    }

    /*
    * 用户注册
    */
    static async register(ctx) {
		let { user_name, password ,email} = ctx.request.body
		
		try{
			await UserModel.REGISTER(user_name, password ,email).then(status=>{
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
						data: {user_name} 
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
		let { user_name, password ,email} = ctx.request.body
		
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
		let { user_name, password ,email} = ctx.request.body
		
		try{
			await UserModel.CHECKACCOUNT(user_name).then(status=>{
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
						data: {user_name} 
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
		let { user_name, password } = ctx.request.body
		
		try{
			await UserModel.LOGIN(user_name, password).then(status=>{
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
						data: {user_name} 
					})
				}
			})
		}catch(err){
			console.log(err)
		}
    }
}

module.exports = UserController