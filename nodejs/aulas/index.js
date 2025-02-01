// const { Person } = require('./person');
// const person = new Person('Giovana');
// require('./modules/path')
// require('./modules/fs')
// require('./modules/http')
require('./modules/express')


require('dotenv').config();

const connectToDatabase = require('./src/database/connect');

connectToDatabase();




