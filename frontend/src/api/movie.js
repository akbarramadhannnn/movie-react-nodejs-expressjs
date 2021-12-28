import axios from "axios";
import URL_API from "../config/url";

export const ApiGetMovie = async (search) => {
  const result = await axios.get(`${URL_API}/movie?search=${search}`);
  return result.data;
};

export const ApiAddMovie = async (payload) => {
  const result = await axios.post(`${URL_API}/movie`, payload);
  return result.data;
};

export const ApiDeleteMovie = async (movieId) => {
  const result = await axios.delete(`${URL_API}/movie/${movieId}`);
  return result.data;
};
