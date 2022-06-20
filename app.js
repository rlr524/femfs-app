const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const winston = require("winston");

app.use(express.static(path.join(__dirname, "public")))

const logger = winston.createLogger({
	level: "info",
	format: winston.format.json(),
	defaultMeta: { service: "user-service"},
	transports: [
		new winston.transports.File({filename: "error.log", level: "error"}),
		new winston.transports.File({filename: "combined.log"}),
	],
});

app.get("/", (req, res) => {
	try {
		res.status(418);
		res.header("Omae wa mou shindeiru");
		res.sendFile(path.join(__dirname + "/public/html/home.html"));
	} catch {
		logger.error("Error: There was an error retrieving the page '/'");
		console.error("Error: There was an error retrieving the page '/'");
	}
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
	logger.info(`App listening on port ${port}`)
})
