const config = {
    dev: {
    port: 3000,
    db:{
        host: 'sql.m77.vhostgo.com',
      port: 3306,
      user: 'suifengcool',
      password: 'xu19880816',
      database: 'suifengcool'
    },
    secret: 'elapse',               // jwt生成token
    salt: 'elapse-server2018',      // md5加密盐值
    mail: {
        user: 'elapse_alarmer@163.com',
        pass: 'EAlarmer2018',
    }
    },

    prod: {
    port: 3000,
    db:{
        host: 'sql.m77.vhostgo.com',
      port: 3306,
      user: 'suifengcool',
      password: 'xu19880816',
      database: 'suifengcool'
    },
    secret: 'elapse',                // jwt生成token
    salt: 'elapse-server2018',       // md5加密盐值
    mail: {
        user: 'elapse_alarmer@163.com',
        pass: 'EAlarmer2018',
    }
    }
}

module.exports = config[process.env.NODE_ENV]