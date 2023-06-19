const express = require("express");
const router = express.Router();
const tareas = require("./tareas.json");

router.get("/completas", (req, res) => {
  const completadas = tareas.filter((tarea) => tarea.isCompleted == true);
  if (completadas.length > 0) {
    res.status(200).send({
      success: true,
      content: completadas,
    });
  } else {
    res.status(404).send("No hay tareas completadas");
  }
});

router.get("/incompletas", (req, res) => {
  const incompletas = tareas.filter((tarea) => tarea.isCompleted == false);
  if (incompletas.length > 0) {
    res.status(200).send({
      success: true,
      content: incompletas,
    });
  } else {
    res.status(404).send("No hay tareas incompletas");
  }
});

router.get("/tareas", (req, res) => {
  res.send({
    success: true,
    content: tareas,
  });
});

module.exports = router;
