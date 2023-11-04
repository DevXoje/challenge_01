import axios from "axios";
import { deCryptStrange } from "./deCryptStrange.js";
const url = "https://codember.dev/data/message_01.txt";

axios
  .get(url)
  .then((response) => {
    const dataFetched = response.data;
    if (typeof dataFetched !== "string") {
      console.log(typeof dataFetched);
      throw new Error("its not a string");
    }
    const result = deCryptStrange(dataFetched);
    console.log(result);
  })
  .catch((error) => console.error("Error al hacer la solicitud:", error));
