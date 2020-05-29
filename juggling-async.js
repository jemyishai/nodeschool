'use strict'
const bl = require('bl')
const http = require('http')
let link1 = process.argv[2]
let link2 = process.argv[3]
let link3 = process.argv[4]


http.get(link1, (res)=>{
	res.setEncoding('utf8')
	res.pipe(bl((err,data)=>{
		console.log(data.toString())

//starting link 2
	http.get(link2, (res)=>{
        res.setEncoding('utf8')
        res.pipe(bl((err,data)=>{
                console.log(data.toString())
        	
		//starting link3
		http.get(link3, (res)=>{
        	res.setEncoding('utf8')
        	res.pipe(bl((err,data)=>{
                	console.log(data.toString())
                	res.on('error',console.error)
                 	}))
                	}).on('error',console.error)
		
		//finishing link2
		res.on('error',console.error)
       		 }))
		}).on('error',console.error)


//finishing link1                        
	res.on('error',console.error)
	}))
}).on('error',console.error)
