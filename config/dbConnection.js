const mysql = require('mysql');

const connMysql = function () {
	return mysql.createConnection({

		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'portal_noticia'

	});
}

module.exports = () => connMysql;


