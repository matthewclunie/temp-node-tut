const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const firstTxt = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const secondTxt = result;
    writeFile(
      "./content/resultAsync.txt",
      `Here is the result: ${firstTxt}, ${secondTxt}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Done with this task");
      }
    );
  });
});
console.log("Starting next task.");
