// 连接MySQL
var mysql = require('mysql');
var pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'user1',
    password: '123456',
    database: 'oceanculture'
});

function query(sql, callback) {
    pool.getConnection(function (err, connection) {
        // Use the connection
        connection.query(sql, function (err, rows) {
            callback(err, rows);
            connection.release();//释放数据库连接
        });
    });
}
exports.query = query;