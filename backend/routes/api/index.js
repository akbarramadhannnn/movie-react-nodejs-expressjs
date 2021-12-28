const router = require("express").Router();
const {
  getAllMovie,
  addMovie,
  deleteMovie,
} = require("../../controllers/movie");

router.get("/movie", getAllMovie);
router.post("/movie", addMovie);
router.delete("/movie/:movieId", deleteMovie);

module.exports = router;
