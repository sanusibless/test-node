const dns = require('dns');

dns.resolveSrv('nodejs.org', (err, records) => {
	if(err) throw err;
	console.log(records);
});