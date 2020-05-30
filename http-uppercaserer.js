'use strict'

const http = require('http')
const map = require('through2-map')


const server = http.createServer(function(req, res){		
//	res.writeHead(200,{'Content-Type':'text/plain'})
// have to check req.method as per exercise && then use map to "map" the entire stream
	if (req.method == "POST"){	
		req.pipe(map(function (chunk){
			return chunk.toString().toUpperCase()
			})).pipe(res)
		}
	})


server.listen(process.argv[2])
