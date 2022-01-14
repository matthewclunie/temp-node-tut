const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const firstTxt = readFileSync("./content/first.txt", "utf8");
const secondTxt = readFileSync("./content/second.txt", "utf8");

writeFileSync(
  "./content/writeSyncResult.txt",
  `Here is the result: ${firstTxt}, ${secondTxt}`,
  { flag: "a" }
);

console.log("Done with this task");
console.log("Starting the next one");
