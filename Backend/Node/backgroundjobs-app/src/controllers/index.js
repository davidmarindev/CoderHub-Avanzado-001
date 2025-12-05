const { exampleJob } = require("../jobs/exampleJob");

exports.getExample = async (req, res, next) => {
  console.log("Entrando en el controlador getExample");
  try {
    await exampleJob(); // o pasarle datos si lo requiere
    res.send("Job ejecutado correctamente.");
  } catch (err) {
    next(err);
  }
};
