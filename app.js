// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> - for mac

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc.)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

/* GIT COMMANDS - 

Create a new repository on the command line:
echo "# temp-node-tut" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/matthewclunie/temp-node-tut.git
git push -u origin main
----------
Push an existing repository from the command line:
git remote add origin https://github.com/matthewclunie/temp-node-tut.git
git branch -M main
git push -u origin main */

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
