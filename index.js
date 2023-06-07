const express = require("express");
const listViewRouter = require("./list-view-router");
const listEditRouter = require("./list-edit-router");

const port = 3000;
const app = express();

app.use("/listview", listViewRouter);
app.use("/listedit", listEditRouter);

app.listen(port, () => {
  console.log("servidor inicializado");
});
