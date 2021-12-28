import axios from "axios";

export const ApiGetMovie = async (search) => {
  const result = await axios.get(
    `http://localhost:2021/api/movie?search=${search}`
  );
  return result.data;
};

export const ApiAddMovie = async (payload) => {
  const result = await axios.post(`http://localhost:2021/api/movie`, payload);
  return result.data;
};

export const ApiDeleteMovie = async (movieId) => {
  const result = await axios.delete(
    `http://localhost:2021/api/movie/${movieId}`
  );
  return result.data;
};
