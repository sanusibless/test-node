let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'blessingsanusi97@gmail.com',
		pass: 'gskmfxytiwiqjqga'
	}
})

let mailOption = {
	from: 'no-reply@gmail.com',
	to: 'holuwoleh@gmail.com',
	subject: "Test Node Mailer",
	html: "<h1>This is a demo test for testing node mailer</h1>"
}

transporter.sendMail(mailOption, (error, info) => {
	if(error) {
		console.log(error.response);
	} else {
		console.log("Mail Sent");
		console.log(info.response);
	}
})