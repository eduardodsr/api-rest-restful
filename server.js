// Verbos HTTP
// GET : Receber dadps de um Resorce
// POST : Enviar dados ou informações para serem processadas por um Resorce
// PUT : Atualizar dados um Resorce
// DELETE : Deletar um Resorce

// http://localhost:3000/clients

// URL: https://jsonplaceholder.typicode.com/users
// Copiar para arquivo data.json

const express = require("express");
const app = express();
const data = require("./data.json");

app.use(express.json());

app.get("/clients", function (req, res) {
  res.json(data);
});

app.get("/clients/:id", function (req, res) {
  const { id } = req.params;

  const client = data.find((cli) => cli.id == id);

  if (!client) return res.status(204).json();

  res.json(client);
});

app.post("/clients", function (req, res) {
  const { name, email } = req.body;

  // salvar

  res.json({ name, email });
});

app.put("/clients/:id", function (req, res) {
  const { id } = req.params;

  const client = data.find((cli) => cli.id == id);

  if (!client) return res.status(204).json();

  const { name, username } = req.body;

  client.name = name;
  client.username = username;

  res.json(client);
});

app.delete("/clients/:id", function (req, res) {
  const { id } = req.params;

  const clientsFiltered = data.filter((client) => client.id != id);

  res.json(clientsFiltered);
});

app.listen(3000, function () {
  console.log("Server is running");
});
