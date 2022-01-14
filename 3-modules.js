// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-altExport");
require("./7-mindGrenade");
sayHi("susan");
sayHi(names.name1);
sayHi(names.name2);
