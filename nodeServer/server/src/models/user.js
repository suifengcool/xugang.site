const mysql = require('../tool/mysql.js');

const checkAccount = async (account) => {
    const data = await mysql.QUERY(`SELECT * from user where user_name = '${account}'`,account);
	const status = data.length ? false : true    
    return status
}

const checkEmail = async (email) => {
    const data = await mysql.QUERY(`SELECT * from user where email = '${email}'`,email);
	const status = data.length ? false : true    
    return status
}

const register = async (account, passwd ,email) => {
	var usr = {
		user_name: account,
		password: passwd,
		email: email
	};

    const data = await mysql.QUERY('insert into user set ?',usr);
    return data
}

const login = async (account, passwd) => {
	var usr = {
		user_name: account,
		password: passwd
	};

    const data = await mysql.QUERY('insert into user set ?',usr); 
    return data
}



module.exports = {
	CHECKACCOUNT: checkAccount,
	CHECKEMAIL: checkEmail,
	REGISTER: register,
	LOGIN: login
}