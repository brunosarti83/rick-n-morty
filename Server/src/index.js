var http = require('http');
var data = require('./utils/data.js');

const PORT = 3001;

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req
    if (url.includes('/rickandmorty/character')) {
        const id = Number(url.slice(url.indexOf('cter/')+5))
        const character = data.find(char => char.id === id)
        if (character) {
            res.writeHead(200, {'Content-Type': 'application/json'})
            return res.end(JSON.stringify(character))
        } else {
            res.writeHead(404, {'Content-Type' : 'application/json'})
            return res.end(JSON.stringify({error: 'id not found'}))
        }
    }
}).listen(PORT, 'localhost')