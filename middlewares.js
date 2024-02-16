const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "seuSuperSegredo";

function logRequest(req, res, next) {
  const now = new Date().toISOString();
  console.log(`[${now}] Requisição recebida: ${req.method} ${req.path}`);
  next();
}

function validateRequestBody(req, res, next) {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send({ mensagem: "Corpo da requisição ausente" });
  }
  next();
}

function logSuccess(req, res, next) {
  const oldSend = res.send;
  res.send = function (data) {
    const now = new Date().toISOString();
    console.log(`[${now}] Requisição bem-sucedida: ${req.method} ${req.path}`);

    res.send = oldSend;
    return res.send.apply(res, arguments);
  };
  next();
}

function validateLoginRequest(req, res, next) {
  const { email, senha } = req.body;
  if (!email || !senha) {
    return res.status(400).send({ mensagem: "Email e senha são obrigatórios" });
  }
  next();
}

function verifyAuthToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({ mensagem: "Token de acesso necessário" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send({ mensagem: "Token inválido ou expirado" });
    }
    req.usuarioId = decoded.id;
    next();
  });
}

module.exports = {
  logRequest,
  validateRequestBody,
  logSuccess,
  validateLoginRequest,
  verifyAuthToken,
};
