'use strict'
const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req,res){
	//need to insert header to res
	fs.createReadStream(process.argv[3]).pipe(res)
	
})

server.listen(process.argv[2])

