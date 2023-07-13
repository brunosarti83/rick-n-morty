const server = require('./app')
const { conn } = require('./DB_connection')

const PORT = 3001;

conn.sync({force: false})

server.listen(PORT, ()=>{
    console.log(`Server raised in port: ${PORT}`)
})