import dns from "dns"

dns.resolveSrv('nodejs.org', (err, records) => {
	if(err) console.log(err);
	console.log(records);
});