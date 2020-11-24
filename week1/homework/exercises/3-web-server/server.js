/**
 * Exercise 3: Create an HTTP web server
 */

const fs = require('fs');
const http = require('http');
const path = require('path');

//create a server
let server = http.createServer(function (req, res) {

	let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
	let extName = path.extname(filePath);

	let contentType = '';
	if (extName == '.html'){
		contentType = 'text/html';
	}
	else if (extName == '.js'){
		contentType = 'text/javascript';
	}
	else if (extName == '.css'){
		contentType = 'text/css';
	}

	fs.readFile(filePath, (error, content) => {
		if (error){
			if (error.code == "ENOENT"){
				//Page not found
				res.writeHead(404);
			} 
			else{
				//Server error
				res.writeHead(500);
			}
			res.end(`Server Error: ${error.code}`);
		}
		else{
			res.writeHead(200, {'Content-Type': contentType})
			res.end(content);
		}
	})

});

server.listen(3000, () => console.log("Server started.")); // The server starts to listen on port 3000
