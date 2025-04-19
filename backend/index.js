const express = require("express");
const cors = require('cors');

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", (req, res) => {

  const {
		username,
		password
	} = req.body;

	console.log('username ' + username);
	console.log('password ' + password);

  if (username === "admin" && password === "admin") {
    res.json({
      username: "admin",
      password: "admin",
      role: "admin",
    });
    return;
  }

  if (username === "user" && password === "user") {
    res.json({
      username: "user",
      password: "user",
      role: "user",
    });
    return;
  }

	res.status(404).send('Usuário não encontrado')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
