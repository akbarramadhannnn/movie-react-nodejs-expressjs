const URL_API_LOCAL = "http://localhost:2021/api";
const URL_API_PROD = "http://widyawicara.akbarramadhan.com/api";

export default process.env.NODE_ENV === "development"
  ? URL_API_LOCAL
  : URL_API_PROD;
