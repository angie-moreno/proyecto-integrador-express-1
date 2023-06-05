const express = require("express");
const tareas = require("./tareas.json");

const port = 3000;
const app = express();
app.use(express.json());

app.get("/tarea", (req, res) => {
  res.send({
    success: true,
    content: tareas,
  });
});

app.post("/tarea", (req, res) => {
  const tarea = req.body;
  tareas.push(tarea);
  res.send({
    success: true,
    content: tareas,
  });
});

app.get("/tarea/:id", (req, res) => {
  const id = req.params.id;
  const tarea = tareas.filter((tarea) => tarea.id == id);
  if (tareas.length < id) {
    res.status(404).send("tarea no encontrada");
  } else {
    res.send({
      success: true,
      content: tarea,
    });
  }
});

app.put("/tarea/:id", (req, res) => {
  const id = req.params.id;
  const { isCompleted, description } = req.body;
  const tarea = tareas.find((tarea) => tarea.id == id);
  if (tarea) {
    tarea.isCompleted = isCompleted;
    tarea.description = description;
    res.json(tarea);
  } else {
    res.status(404).send("libro no encotrado");
  }
});

app.delete("/tarea/:id", (req, res) => {
  const id = req.params.id;
  const index = tareas.findIndex((tarea) => tarea.id == id);
  if (index != -1) {
    tareas.splice(index, 1);
    res.send({
      success: true,
      content: tareas,
    });
  } else {
    res.status(404).send("tarea no encontrada");
  }
});

app.listen(port, () => {
  console.log("servidor inicializado");
});
