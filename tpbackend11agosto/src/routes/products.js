const {Router} = require('express');
const router = Router();

const products = require('../sample.json');
// console.log(products); //muestra el json 

router.get('/', (req, res) => {
    res.json(products); //muestra el json
})

router.post('/', (req, res) => {
    const {name, price} = req.body; //req.body es el body del post
    products.push({name, price}); //agregamos el producto al json
    res.json(products); //muestra el json
})

module.exports = router; //exportamos el router para poder usarlo en index.js 