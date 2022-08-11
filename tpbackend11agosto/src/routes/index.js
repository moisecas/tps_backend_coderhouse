const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World'); 
})

module.exports = router; //exportamos el router para poder usarlo en index.js 