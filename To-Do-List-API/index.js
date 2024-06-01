const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let todos = [];

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const todo = req.body;
  todos.push(todo);
  res.status(201).json(todo);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
