const express = require('express');
const logger = require('./utils/logger');


const app = express();

app.route('/').get((req, res) => {
    logger.info('GET / autenticación');
    res.send('Hello coderhouse, usuario autenticado');
})

app.listen(3000, () => {
    logger.info('Server running on port 3000'); //usamos winston para logear en consola
}) 


