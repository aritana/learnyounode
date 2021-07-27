const fs = require('fs')
try {

    const data = fs.readFileSync(process.argv[2], 'utf8')
    const myArr = data.toString().split('\n');
    console.log(myArr.length - 1)
} catch (err) {
    console.error(err)
}