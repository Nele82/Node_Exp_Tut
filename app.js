// npm - global command, comes with node
// command: npm --version

// local dependency - use it only in this particular project 
// command: npm i <packageName>

// global dependency - use it in any project
// command: npm install -g <packageName>
// command: sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// command: npm init (step by step, press enter to skip)
// command: npm init -y (everything default)

const _ = require('lodash');

const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log('hello world');