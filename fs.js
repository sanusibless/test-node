import { open } from 'fs/promises';


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

async function readContent(filePath, mode) {
	let filehandle;
	try {
		filehandle = await open(filePath, mode);
		console.log(filehandle.readFile())
		filehandle?.close();
	} catch (err) {
		console.log(err.message);
		filehandle?.close();
	}
}
openingFile('tmp/hello.txt', 'w')
readContent('tmp/hello.txt', 'r')
