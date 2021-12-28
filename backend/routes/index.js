const router = require("express").Router();
const api = require("./api");
const Response = require("../helpers/response");

router.use("/api", api);
router.all("*", (req, res) => {
  return res.json(
    Response(
      false,
      404,
      `method ${req.method} url ${req.originalUrl} not found!`,
      {}
    )
  );
});
module.exports = router;
