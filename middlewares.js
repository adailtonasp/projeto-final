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

module.exports = {
  logRequest,
  validateRequestBody,
  logSuccess
};
