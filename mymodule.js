'use strict'
const fs = require('fs');
const path = require('path');


module.exports = function (input,ext,callback){
           fs.readdir(input,(err,data)=>{
			if (err) return callback(err);
			callback(null,data.filter(file => path.extname(file) == '.'+  ext))
			
			
		})      
        }



