'use strict';
const mysql  = require( 'mysql' );
const Config = require('../config');

var pool  = mysql.createPool({
    connectionLimit : 50,
    host: Config.db.host,
    port: Config.db.port,
    user: Config.db.user,
    password: Config.db.password,
    database: Config.db.database,
    multipleStatements : true             //是否允许执行多条sql语句
});

let query = ( sql, values ) => {
    // 返回一个 Promise
    return new Promise(( resolve, reject ) => {
        pool.getConnection((err, connection) => {
            if(err){
                reject(err)
            }else {
                connection.query(sql, values, (err, rows) => {
                    if(err){
                        reject( err )
                    }else {
                        resolve( rows )
                    }
                    // 结束会话
                    connection.release()
                })
            }
        })
    })
}

//模块导出
module.exports = {
    QUERY : query
}