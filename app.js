const express = require("express");
const app = express();
const port = 3000;
const path = require("path")

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/public/html/home.html"));
});

app.listen(port, () => console.log(`App listening on port ${port}`));
