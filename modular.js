'use strict'
const fs = require('fs');
const path = require('path');
let input = process.argv[2]
let ext = process.argv[3]

let callback = (err,data) => {
        if (err) throw err;
        return data.filter(file => path.extname(file) == ext)
}


module.exports = function (input,ext,callback){
		fs.readdir(input,callback)	
	}



