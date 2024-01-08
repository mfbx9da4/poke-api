import Axios from "axios";

export const http = Axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  headers: { "Content-Type": "application/json" },
  // Client will handle status validation
  validateStatus: (_status) => true,
});
