import { deCryptStrange } from "./deCryptStrange.js";
import assert from "assert";

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
