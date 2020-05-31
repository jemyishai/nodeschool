'use strict'
const http = require('http')

const server = http.createServer(function(req,res){
	let output = {hour:0, minute:0, second: 0}
	res.writeHead(200,{'Content-Type':'application/json'})
	const myURL = new URL(req.url,'http://localhost:'+process.argv[2])
	if (req.method == "GET" && myURL.pathname == '/api/parsetime'){
		let time = myURL.searchParams.get('iso')	
		let dateobject = new Date(time)
		output.hour = dateobject.getHours()
		output.minute = dateobject.getMinutes()
		output.second = dateobject.getSeconds() 		
	}
	if (req.method == "GET" && myURL.pathname == '/api/unixtime'){	
		let untime = myURL.searchParams.get('iso')	
		output = {'unixtime' : Date.parse(untime)}	
	}

	res.end(JSON.stringify(output))
})


server.listen(process.argv[2])
