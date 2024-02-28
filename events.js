const { EventEmitter, errorMonitor } = require('events');

class MyEmitter extends EventEmitter {};
class ErrorEmmiter {
	constructor(err) {
		console.log(err);
	}
}

let myemitter = new MyEmitter();

myemitter.on(errorMonitor, (err) => {
	new ErrorEmmiter(err);
})

myemitter.emit('error', new Error('Whoops!'));

