const path = require("path");
const express = require("express");
const Usuario = require("./Usuario");
const {
  verifyAuthToken,
  logRequest,
  validateRequestBody,
  logSuccess,
} = require("../middlewares");

const router = express.Router();

router.post("/usuarios", logRequest, validateRequestBody, async (req, res) => {
  try {
    const { username, email } = req.body;
    if (!username || !email) {
      return res.status(400).send({
        mensagem: "Todos os campos são obrigatórios para criar usuario",
      });
    }

    let novoUsuario = new Usuario({ username, email });

    await novoUsuario.save();

    logSuccess(req, res, () => {});
    res.status(201).send({ id: novoUsuario.id });
  } catch (erro) {
    res.status(500).send({ mensagem: "Erro ao salvar o usuario no banco de dados" });
  }
});

router.get("/usuarios", logRequest, async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).send(usuarios);
  } catch (erro) {
    res.status(500).send({ mensagem: "Erro ao recuperar os usuarios do banco de dados" });
  }
});

router.delete("/usuarios/:id", logRequest, async (req, res) => {
  try {
    const usuarioId = req.params.id;
    const usuario = await Usuario.findById(usuarioId);

    if (!usuario) {
      return res.status(404).send({ mensagem: "usuario não encontrado" });
    }

    await Usuario.deleteOne({ _id: usuarioId });
    res.status(200).send({ mensagem: "Usuario excluído com sucesso" });
  } catch (erro) {
    res.status(500).send({ mensagem: "Erro ao excluir o usuario" });
  }
});

router.put("/usuarios/:id", logRequest, validateRequestBody, async (req, res) => {
  try {
    const usuarioId = req.params.id;
    const { username, email } = req.body;

    const usuario = await Usuario.findById(usuarioId);

    if (!usuario) {
      return res.status(404).send({ mensagem: "Usuario não encontrado" });
    }

    usuario.username = username;
    usuario.email = email;

    await usuario.save();
    res.status(200).send({ mensagem: "usuario atualizado com sucesso", id: usuario.id });
  } catch (erro) {
    res.status(500).send({ mensagem: "Erro ao atualizar o usuario" });
  }
});

module.exports = router