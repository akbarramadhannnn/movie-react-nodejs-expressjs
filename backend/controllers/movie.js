const fs = require("fs");
const uuid = require("uuid");
const Response = require("../helpers/response");

exports.getAllMovie = (req, res) => {
  const search = req.query.search || "";
  const readData = fs.readFileSync("./data/datadummy.json");
  const parseData = JSON.parse(readData);
  const regex = new RegExp(search.toLowerCase(), "i");
  const filterData = parseData.data.filter((d) =>
    d.title.toLowerCase().match(regex)
  );
  return res.json(Response(true, 200, `Get Movie Success`, filterData));
};

exports.addMovie = (req, res) => {
  const { title, genre, rating, duration, quality, trailer, watch } = req.body;
  if (!title) {
    return res.json(
      Response(false, 400, `Title is required`, { field: "title" })
    );
  } else if (!genre.length > 0) {
    return res.json(
      Response(false, 400, `Genre is required`, { field: "genre" })
    );
  } else if (!rating) {
    return res.json(
      Response(false, 400, `Rating is required`, { field: "rating" })
    );
  } else if (!duration) {
    return res.json(
      Response(false, 400, `Duration is required`, { field: "duration" })
    );
  } else if (!quality) {
    return res.json(
      Response(false, 400, `Quality is required`, { field: "quality" })
    );
  } else if (!trailer) {
    return res.json(
      Response(false, 400, `Trailer is required`, { field: "trailer" })
    );
  } else if (!watch) {
    return res.json(
      Response(false, 400, `Watch is required`, { field: "watch" })
    );
  } else {
    const payload = {
      id: uuid.v4(),
      title,
      genre,
      rating,
      duration,
      quality,
      trailer,
      watch,
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
