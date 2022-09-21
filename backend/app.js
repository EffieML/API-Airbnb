//imort packages:
const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

//isProduction is true when env is in production
const { environment } = require('./config');
const isProduction = environment === 'production';

//initialize Express
const app = express();

//connect  morgan middleware for logging info about request/responses
app.use(morgan('dev'));

//add cookie-parser middleware for parsing cookies, express for parsing JSON
app.use(cookieParser());
app.use(express.json());

// add several security middleware
// Security Middleware
if (!isProduction) {
    // enable cors only in development
    app.use(cors());
}

// helmet helps set a variety of headers to better secure your app
app.use(
    helmet.crossOriginResourcePolicy({
        policy: "cross-origin"
    })
);

// Set the _csrf token and create req.csrfToken method
app.use(
    csurf({
        cookie: {
            secure: isProduction,
            sameSite: isProduction && "Lax",
            httpOnly: true
        }
    })
);



// backend/app.js
const routes = require('./routes');

// ...

app.use(routes); // Connect all the routes




// backend/app.js
// ...

module.exports = app;
