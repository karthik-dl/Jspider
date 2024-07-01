const path=require('path');
// console.log("__dirname");
// console.log("__filename");

console.log(path.basename("./sam.txt"));
console.log(path.extname("./sam.txt"));
console.log(path.dirname("./sam.txt"));
console.log(path.join(__dirname,"index.js"));