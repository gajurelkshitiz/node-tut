const { writeFileSync } = require('fs');

for (let i = 0; i < 10000; i++) {
    writeFileSync('./newfolder/bigfile.txt', 
        `Hey, this is a creation of big file verion 1.1.${i}\n`, 
        { flag: 'a' }
    );
};
