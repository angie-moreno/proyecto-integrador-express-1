const express = require("express");
const router = express.Router();
const tareas = require("./tareas.json");
router.use(express.json());

function bodyValidation(req, res, next) {
  if (Object.values(req.body).length === 0) {
    res.status(400).send("body no tiene información");
  } else {
    next();
  }
}
function dataValidation(req, res, next) {
  const { isCompleted, description } = req.body;
  if (!isCompleted || !description) {
    res.status(400).send("Falta información para crear la tarea");
  } else {
    next();
  }
}

router.post("/tarea", bodyValidation, dataValidation, (req, res) => {
  const { isCompleted, description } = req.body;
  const id = tareas.length + 1;
  tareas.push({ id: id, isCompleted: isCompleted, description: description });
  res.send({
    success: true,
    content: tareas,
  });
});

router.put("/tarea/:id", bodyValidation, dataValidation, (req, res) => {
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

router.delete("/tarea/:id", (req, res) => {
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

module.exports = router;
