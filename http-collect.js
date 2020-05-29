'use strict'
const http = require('http')
const bl = require('bl')  
    
    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.pipe(bl(function(err,data){
	let char = data.toString().length
	console.log(char)
	console.log(data.toString())
	}))
      response.on('error', console.error)
    }).on('error', console.error)


