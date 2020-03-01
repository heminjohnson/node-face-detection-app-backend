const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "",
    password: "",
    database: "face-detection-app"
  }
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

const database = {
  users: [
    {
      id: "1",
      name: "Hemin",
      email: "hemin@gmail.com",
      password: "secret",
      entries: 0,
      joined: new Date()
    },
    {
      id: "2",
      name: "Johnson",
      email: "johnson@gmail.com",
      password: "secret",
      entries: 0,
      joined: new Date()
    }
  ]
};

app.get("/", (req, res) => {
  res.send(database.users);
});

app.post("/signin", (req, res) => {
  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json("success");
  } else {
    res.status(400).json("error loggin in");
  }
});

app.post("/register", (req, res) => {
  const { email, name, password } = req.body;

  db("users")
    .returning("*")
    .insert({
      name: name,
      email: email,
      joined: new Date()
    })
    .then(user => {
      res.json(user[0]);
    })
    .catch(err => res.status(400).json("unable to join"));
});

app.get("/profile/:id", (req, res) => {
  const { id } = req.params;
  let found = false;

  database.users.forEach(user => {
    if (user.id === id) {
      found = true;
      return res.json(user);
    }
  });

  if (!found) {
    res.status(400).json("not found");
  }
});

app.put("/image", (req, res) => {
  const { id } = req.body;
  let found = false;

  database.users.forEach(user => {
    if (user.id === id) {
      found = true;
      user.entries++;
      return res.json(user.entries);
    }
  });

  if (!found) {
    res.status(400).json("not found");
  }
});

app.listen(4000, () => {
  console.log("app is listening on port 4000");
});
