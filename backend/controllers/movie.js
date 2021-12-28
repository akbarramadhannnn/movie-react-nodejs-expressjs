const fs = require("fs");
const DataDummy = require("../data/datadummy.json");
const uuid = require("uuid");
const Response = require("../helpers/response");

exports.getAllMovie = (req, res) => {
  const search = req.query.search || "";
  const readData = fs.readFileSync("./data/datadummy.json");
  const parseData = JSON.parse(readData);
  const regex = new RegExp(search.toLowerCase(), "i");
  const filterData = parseData.data.filter((d) =>
    d.name.toLowerCase().match(regex)
  );
  return res.json(Response(true, 200, `Get Movie Success`, filterData));
};

exports.addMovie = (req, res) => {
  const { name, description, duration, years, urlImage } = req.body;
  if (!name) {
    return res.json(
      Response(false, 400, `name is required`, { field: "name" })
    );
  } else if (!description) {
    return res.json(
      Response(false, 400, `Description is required`, { field: "description" })
    );
  } else if (!years) {
    return res.json(
      Response(false, 400, `Years is required`, { field: "years" })
    );
  } else if (!duration) {
    return res.json(
      Response(false, 400, `Duration is required`, { field: "duration" })
    );
  } else if (!urlImage) {
    return res.json(
      Response(false, 400, `Url Image is required`, { field: "urlImage" })
    );
  } else {
    if (isNaN(years)) {
      return res.json(
        Response(false, 400, `Years is number`, { field: "years" })
      );
    } else if (isNaN(duration)) {
      return res.json(
        Response(false, 400, `Duration is number`, { field: "duration" })
      );
    } else {
      const payload = {
        id: uuid.v4(),
        name: name,
        description: description,
        years: Number(years),
        duration: Number(duration),
        urlImage: urlImage,
      };
      const readData = fs.readFileSync("./data/datadummy.json");
      const parseData = JSON.parse(readData);
      parseData.data.push(payload);
      const newData = JSON.stringify(parseData);
      fs.writeFile("./data/datadummy.json", newData, (err) => {
        if (err) throw err;
        return res.json(Response(true, 201, `Added Movie Success`, {}));
      });
    }
  }
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
