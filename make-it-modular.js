'use strict';
const mymodule = require('./mymodule.js')
let ext = process.argv[3];
let data = process.argv[2];


let callback = (err, data) =>{
	if (err) console.error(err);
	data.forEach((file)=>console.log(file))}


mymodule(data, ext, callback)


