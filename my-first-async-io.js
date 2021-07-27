const fs = require('fs')



function countLines() {
    fs.readFile(process.argv[2], (err, data) => {
        const myArr = data.toString().split('\n');
        console.log(myArr.length - 1)
    })
}
countLines();



