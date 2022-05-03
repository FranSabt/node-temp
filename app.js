// npm - global command, comes with node
// npm --version


// local dependency (also celled 'packaged' and 'modules')
// local dependency - use only in this particular project
// npm i <packagedName>

// global dependency - use in any project
// npm install -g <packagedName>
// sudo npm install -g <packagedName> (mac)

// packaged.json - manifest file (stores important info about project/packaged)
// manuel approach (create packaged.json in the root, create properties etc.)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);