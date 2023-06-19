const express = require("express");
const listViewRouter = require("./list-view-router");
const listEditRouter = require("./list-edit-router");
const tareaViewRouter = require("./tarea-view-router");
const loginRouter = require("./login-router");
const port = 3000;
const app = express();

function methods(req, res, next) {
  const method = req.method;
  if (
    method === "GET" ||
    method === "POST" ||
    method === "PUT" ||
    method === "DELETE"
  ) {
    next();
  } else {
    res.status(400).send("Método http inválido");
  }
}

app.use(methods);
app.use("/listview", listViewRouter);
app.use("/listedit", listEditRouter);
app.use("/tareaview", tareaViewRouter);
app.use("/loginrouter", loginRouter);

app.listen(port, () => {
  console.log("servidor inicializado");
});
