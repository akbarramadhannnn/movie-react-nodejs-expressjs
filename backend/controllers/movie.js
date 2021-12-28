const fs = require("fs");
const DataDummy = require("../data/datadummy.json");
const uuid = require("uuid");
const Response = require("../helpers/response");

exports.getAllMovie = (req, res) => {
  const search = req.query.search || "";
  const readData = fs.readFileSync("./data/datadummy.json");
  const parseData = JSON.parse(readData);
  const regex = new RegExp(search.toLowerCase(), "i");
  const filterData = parseData.data.filter(
    (d) => d.name.toLowerCase().match(regex)
  );
  return res.json(Response(true, 200, `Get Movie Success`, filterData));
};

exports.addMovie = (req, res) => {
  const { name, description, genre } = req.body;
  const readData = fs.readFileSync("./data/datadummy.json");
  const parseData = JSON.parse(readData);
  parseData.data.push({
    id: uuid.v4(),
    name: name,
    description: description,
    genre: genre,
  });
  const newData = JSON.stringify(parseData);
  fs.writeFile("./data/datadummy.json", newData, (err) => {
    if (err) throw err;
    return res.json(Response(true, 201, `Added Movie Success`, {}));
  });
};

exports.deleteMovie = (req, res) => {
  const { movieId } = req.params;
  const readData = fs.readFileSync("./data/datadummy.json");
  let parseData = JSON.parse(readData);
  const data = parseData.data;
  const findData = data.find((d) => d.id === movieId);
  if (findData === undefined) {
    return res.json(Response(false, 400, `Id not found!`, {}));
  } else {
    parseData.data = data.filter((d) => {
      return d.id !== movieId;
    });
    const newData = JSON.stringify(parseData, null, 2);
    fs.writeFile("./data/datadummy.json", newData, (err) => {
      if (err) throw err;
      return res.json(Response(true, 200, `Delete Movie Success`, {}));
    });
  }
};
