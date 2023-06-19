const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();

router.use(express.json());
router.use(cors());

// simular datos de base de datos
const users = [
  { user: "user 1", email: "user1@example.com", password: "abc123" },
  { user: "user 2", email: "user2@example.com", password: "def456" },
  { user: "user 3", email: "user3@example.com", password: "ghi789" },
];

router.post("/login", (req, res) => {
  const email = req.body.email;
  const ususario = users.find((someUser) => someUser.email === email);
  if (!ususario) {
    res.status(401).send("Usuario no autorizado");
  } else {
    const payload = { user: ususario.user, email: ususario.email };
    const token = jwt.sign(payload, process.env.LLAVESECRETA);
    res.status(200).send({
      mensaje: "Bienvenido",
      token,
    });
  }
});

function checkToken(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    res.send("El token no es válido");
  } else {
    const verifyToken = jwt.verify(token, process.env.LLAVESECRETA);
    next();
  }
}
router.get("/usuario", checkToken, (req, res) => {
  res.status(200).send("Registro exitoso");
});

module.exports = router;
