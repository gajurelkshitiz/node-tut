const file = require('fs');

console.log('Starting task...')
// Reading files synchronously
const file1 = file.readFileSync('./newfolder/text1.txt', 'utf-8')
const file2 = file.readFileSync('./newfolder/text2.txt', 'utf-8')

file.writeFileSync('./newfolder/subfolder/resulttext.txt', `Duitai file jodesi yesto dekhinchha: ${file1} \n${file2}`, {flag: 'a'})
console.log('Done with this task!')

console.log('Starting next task...')