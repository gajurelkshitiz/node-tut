const path = require('path');
const separator = path.sep;
console.log(`Path separator: ${separator}`);

const filepath = path.join('/newfolder', 'subfolder', 'subsubfolder', 'testfolder', 'test.txt');
console.log(`File path: ${filepath}`);

const base = path.basename(filepath);
console.log(`Base name: ${base}`);

const absolute = path.resolve('newfolder', 'subfolder', 'subsubfolder', 'testfolder', 'test.txt');
console.log(`Absolute path: ${absolute}`);

const dir = path.dirname(filepath);
console.log(`Directory name: ${dir}`);