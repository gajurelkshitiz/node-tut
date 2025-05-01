
const {readFile, writeFile} = require('fs').promises; // using fs promises to avoid callback hell

const start = async () => {
    try {
        const first = await readFile('./newfolder/text1.txt', 'utf-8');
        const second = await readFile('./newfolder/text2.txt', 'utf-8');
        console.log(first, 'bich ma thapnu parne bhoo hau, recheck ko lagi:', second);

        await writeFile('./newfolder/subfolder/new-result-async-await.txt', `this feature is dherai daami: \n${first} \n${second}`, {flag: 'a'}); // 'a' flag is used to append the data to the file
        console.log('done with this task'); // this will be printed after the file is written
    }
    catch (err) {
        console.log(err);
        console.log('error in the program'); // this will be printed if there is an error in reading or writing the file

    }
}

start(); 







// The above code is more easier and cleaner than the below:
/*
const { readFile, writeFile } = require('fs');
const util = require('util');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);


const start = async () => {
    try{
        const first = await readFilePromise('./newfolder/text1.txt', 'utf-8');
        const second = await readFilePromise('./newfolder/text2.txt', 'utf-8');
        console.log(first,'bich ma thapnu parne bhoo hau, recheck ko lagi:' , second);
        await writeFilePromise('./newfolder/subfolder/result-async-await.txt', `this feature is daami: \n${first} \n${second}`);
    }
    catch (err) {
        console.log(err);
        console.log('error in the program');
    }
};


start();
*/






// const getText = (path) => {
//     return new Promise((resolve, reject) => {     
//         readFile(path, 'utf-8', (err, result) => {
//             if (err) {
//                 reject(err);
//             }
//             resolve(result);
//     });
// })
// };



// getText('./newfolder/text1.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));

