const mongoose = require("mongoose");
async function connect() {
	try {
		const username = "haruta-job_1";
		const password = "LPOXvK1idBRQxpt3";

		const url = `mongodb+srv://${username}:${password}@atlascluster.akqikjq.mongodb.net/job_recruitment?retryWrites=true&w=majority`;
		await mongoose.connect(url);
		console.log("connect successfully");
	} catch (error) {
		console.log("error connecting");
	}
}

module.exports = { connect };
