const { open } = require('fs/promises');


async function openingFile(filePath, mode) {
	let filehandle;
	try {
		filehandle = await open(filePath, mode);
		filehandle.appendFile('Hello Blessing', {
			flush: true
		})
		filehandle?.close();
	} catch (err) {
		console.log(err.message);
		filehandle?.close();
	}
}

async function readContent(filePath) {
	let filehandle;
	try {
		filehandle = await open(filePath, mode);
		filehandle.readFile(
		filehandle?.close();
	} catch (err) {
		console.log(err.message);
		filehandle?.close();
	}
}
openingFile('tmp/hello.txt', 'w')

