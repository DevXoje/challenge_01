const assert = require("assert");

/**
 *
 * @param {string} messageCrypt
 * @returns string
 */
function deCryptStrange(messageCrypt) {
  let messageDecrypt = "";
  const regexToClean = new RegExp("[\n\t]", "g");
  const messageCryptLower = messageCrypt.toLowerCase();
  const messageCryptClean = messageCryptLower.replace(regexToClean, "");
  const words = messageCryptClean.split(" ");
  /* let messageDecrypt = "";
  const messageCryptLower = messageCrypt.toLowerCase();
  const words = messageCryptLower.split(" "); */
  // const filterWords = words.filter((word) => word !== " ");
  const wordsUnique = [...new Set(words)];
  const messageAlmostDecrypted = [];
  for (const element of wordsUnique) {
    const regex = new RegExp(`\\b${element}\\b`, "gi");
    const result = messageCryptLower.match(regex);
    let name = "";
    try {
      name = result[0];
      const numAppearances = result.length;
      const record = `${name}${numAppearances}`;
      messageAlmostDecrypted.push(record);
    } catch (error) {
      console.log({
        result,
        regex,
        name,
        messageCrypt,
      });
    }
  }
  messageDecrypt = messageAlmostDecrypted.join("");
  return messageDecrypt;
}
const example1 = {
  mock: "llaveS casa CASA casa llaves",
  expected: "llaves2casa3",
};
const example2 = {
  mock: "taza ta za taza",
  expected: "taza2ta1za1",
};
const example3 = {
  mock: "casas casa casasas",
  expected: "casas1casa1casasas1",
};
const example4 = {
  mock: "halcon halcon\n",
  expected: "halcon2",
};
// Prueba 1
assert.equal(deCryptStrange(example1.mock), example1.expected);
// Prueba 2
assert.equal(deCryptStrange(example2.mock), example2.expected);
// Prueba 3
assert.equal(deCryptStrange(example3.mock), example3.expected);
// Prueba 4
assert.equal(deCryptStrange(example4.mock), example4.expected);

//console.log("Todas las pruebas pasaron");

const axios = require("axios");

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
