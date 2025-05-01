const { readFile, read } = require('fs');
console.log('Starting task...')

// Read the first file
readFile('./newfolder/text1.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
    console.log('File 1 read successfully!');
});

console.log("Starting next task...")