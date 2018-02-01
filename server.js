//inport express
const app = require('express')();
const bodyParser = require('body-parser') //bodyParser
const cors = require('cors')


// import for connect to the db
const config = require('./config/config')
const mongoose = require('mongoose')
mongoose.connect(`mongodb://${config.host}:${config.port}/${config.database}`, (err) => {
  if (err) console.log('connect fail')
  else console.log('connect success')
})

//defind port
var port = process.env.PORT || 3001;
 
//bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//routing
app.get('/', function (req, res) {
    res.send('<h1>Hello Node.js</h1>');
});
//test path routing
const test = require('./route/test.routes') //test
app.use('/test', test) //test
app.use('/test', cors({ origin: 'http://co-project1.eg.mahidol.ac.th/' }))
const register = require('./route/register.routes') //register
app.use('/register', register) //regist
app.use('/register', cors({ origin: 'http://co-project1.eg.mahidol.ac.th/' }))
const login = require('./route/login.routes') //login
app.use('/login', login) //login
app.use('/login', cors({ origin: 'http://co-project1.eg.mahidol.ac.th/' }))
const user = require('./route/user.routes') //login
app.use('/user', user) //user
app.use('/user', cors({ origin: 'http://co-project1.eg.mahidol.ac.th/' }))

//server.js run ^^
app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});