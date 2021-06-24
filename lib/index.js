const Complier = require("./compiler.js");
const options = require("../simplepack.config.js");

var complier = new Complier(options);

complier.run();
