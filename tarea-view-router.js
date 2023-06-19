const express = require("express");
const router = express.Router();
const tareas = require("./tareas.json");

function paramValidation(req, res, next) {
  const idParam = req.params.id;
  if (!idParam) {
    res.status(400).send("Debes introducir el parámetro id");
  } else {
    next();
  }
}
router.use(paramValidation);

router.get("/tarea/:id", (req, res) => {
  const id = req.params.id;
  const tarea = tareas.find((tarea) => tarea.id == id);
  if (!tarea) {
    res.status(404).send("Tarea no encontrada");
  } else {
    res.send({
      success: true,
      content: tarea,
    });
  }
});
module.exports = router;
