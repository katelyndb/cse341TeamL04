const routes = require('express').Router();
const temple = require('./temples');

routes.use('/', require('./swagger'));
routes.use('/temples', temple);
routes.use( '/',
(docData = (req, res) => {
    let docData = {
        documentationURL: 'https//nathanbirch.github.io/nathan-byui-api-docs',
    };
    res.send(docData);
})
);