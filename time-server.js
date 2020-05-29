'use strict'
const net = require('net')

let output = new Date();

let year = output.getFullYear()
let month = Number(output.getMonth()+1) < 10 ? '0'+(Number(output.getMonth())+1): Number(output.getMonth())+1  
let day = output.getDate()
let hours = output.getHours()
let minutes = output.getMinutes()

const server = net.createServer(function(socket){	
	socket.end(year+'-'+ month + '-'+ day + ' ' + hours + ':' + minutes + '\n' )
})

server.listen(process.argv[2])

