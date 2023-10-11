import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d3cd4bc6d3284cbfb81a76d7f1567c8d",
  },
});
