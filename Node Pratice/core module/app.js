/*This will create new file*/

/*var fs = require('fs');
fs.writeFileSync("a.txt","Hello frnd how r u");
console.log(fs.readFileSync("a.txt").toString());*/

var path = require('path');
var web = "Desktop/rishav////risha/a.html"

console.log(path.normalize(web));
console.log(path.dirname(web));
console.log(path.basename(web));
console.log(path.extname(web));