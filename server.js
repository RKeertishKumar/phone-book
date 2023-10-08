const express = require("express")
const app = express()
const path = require('path')
const port = 8081

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>{
	res.sendFile('index.html')
});

app.listen(port, ()=> {
	console.log("Listening on port " + port)
})