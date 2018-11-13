const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/tasks', require('./routes/tasks.routes'));

//Static
app.use(express.static(path.join(__dirname, 'public')));

// Start Server
app.listen(app.get('port'), ()=> {
    console.log(`Server on Port ${app.get('port')}`);
});