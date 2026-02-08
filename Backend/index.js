const express = require('express');
const dotenv = require('dotenv');``
const logger = require('./middleware/logger');
const { default: db } = require('./config/dbLocalconnection');
// const { default: cloudDb } = require('./config/dbCloudconnection');

const router = require('./routes');


//Configure Dot env
dotenv.config();
const port = process.env.PORT || 3000;

//Rest object
const app = express();

//Middlewares
app.use(logger);
app.use(express.urlencoded());
app.use(express.static('./assets'));
app.use(express.json())



//Routes
app.use('/', router);
app.use('/',require('./routes'));



// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
 

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log("Server is running on" + `\nport: http://localhost:${port}`.blue);
});
