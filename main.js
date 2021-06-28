const http = require('http')
const db = require('./config/database.js');
const app = require('./config/express')()

http.createServer(app).listen(app.get('port'), 
    ()=> console.log("Express Server executed in port: " + app.get('port'))
)
db('mongodb://localhost/clinicaveterinaria');

