// Importing required modules
const express = require('express');
const bodyParser = require('body-parser');
const logger = require("morgan");
const authController = require('./src/controllers/authController');
const countryInfoController = require('./src/controllers/countryInfoController');
const countryListController = require('./src/controllers/countryListController');
const errorHandlingMiddleware = require('./src/middleware/errorHandling');

//Initialising the express app
const app = express();


app.use(bodyParser.json());

// Routes
app.use('/api/auth', authController);
app.use('/api/countryInfo', countryInfoController);
app.use('/api/countriesName', countryListController);

// Error handling middleware
app.use(errorHandlingMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
