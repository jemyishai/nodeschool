'use strict'
const fs = require('fs');
const path = require('path');
let input = process.argv

fs.readdir(input[2],(err,data)=>{
	if (err) throw err;
	data.filter(file => path.extname(file) == '.'+ input[3]).forEach((file)=> console.log(file))
})


