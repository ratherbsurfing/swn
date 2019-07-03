var fs = require('fs');

// file is included here:
eval(fs.readFileSync('world.js')+'');

let world = generateWorld();

console.log(world);