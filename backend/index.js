const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(routes);

app.listen(2021, () => {
  console.log(`Server running on port 2021`);
});
