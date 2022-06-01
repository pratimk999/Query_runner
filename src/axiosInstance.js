import axios from "axios";

const instance = axios.create({
  baseURL: "https://retoolapi.dev/",
});

export default instance;
