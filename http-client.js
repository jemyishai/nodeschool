'use strict'
const http = require('http');
const url = process.argv[2]


http.get(url,(response)=>{
	response.setEncoding('utf8')
	response.on('data', (dat)=>console.log(dat))
	response.on('error',console.error)
	})
	
