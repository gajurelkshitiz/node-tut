const { readFile, writeFile } = require('fs');

console.log('Starting task...')
readFile('./newfolder/text1.txt', 'utf-8', (err, data) => 
    {
        if (err) {
            console.log(err);
            return;
        }
        const file1 = data;
        readFile('./newfolder/text2.txt', 'utf-8', (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }
                const file2 = data;
                writeFile('./newfolder/subfolder/async-resulttext.txt', `Async ma file jodesi yesto dekhinchha: ${file1} \n${file2}`, (err, data) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    console.log('Done with this task!');
        })
        })
    });
console.log('Starting next task...')