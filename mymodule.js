const fs = require('fs')
const path = require('path');


let filtrar = function (dir, filterStr, callback) {

    fs.readdir(dir, (err, list) => {
        if (err) {
            return callback(err)
        }
        list = list.filter((file) => {
            return path.extname(file) === '.' + filterStr
        })
        callback(null, list)
    })
}

module.exports = {
    filtrar
}