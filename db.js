var mysql = require('mysql');

let dbDetails = {
	host: '127.0.0.1',
	user: 'root',
	database: 'quiz',
	password: '',
}

let connection = mysql.createConnection(dbDetails);

connection.connect((err) => {
	if(err) throw err;
	connection.query("SELECT * FROM users LIMIT 1, 5", (err, result) => {
		if(err) throw err;
		console.log('Result', result);
	});
});

