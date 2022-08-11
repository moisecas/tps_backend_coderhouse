const {Router} = require('express');
const router = Router();
const _ = require('underscore'); //underscore es una libreria para trabajar con arrays y objetos


const products = require('../sample.json');
// console.log(products); //muestra el json 

router.get('/', (req, res) => {
    res.json(products); //muestra el json
})

//post para crear un nuevo producto
router.post('/', (req, res) => {
    const {name, price} = req.body; //req.body es el body del post
    if(name && price){
        const id = products.length + 1;
        const newProduct = {id, name, price};
        products.push(newProduct);
        res.json(newProduct);
    }else{
        res.status(500).json({msg: 'Name and price are required'});
    }
    
})

//put para actualizar un producto
router.put('/:id', (req, res) => {
    const {id} = req.params; //req.params es el id del put
    const {name, price} = req.body; //req.body es el body del put
    const productIndex = _.findIndex(products, (product) => product.id == id); //_.findIndex busca el indice del producto
    if(productIndex >= 0){ //si el producto existe 
        const product = products[productIndex]; //product es el producto que esta en el indice productIndex
        product.name = name;
        product.price = price;
        res.json(product);
    }else{
        res.status(500).json({msg: 'Product not found'});
    }
})

//delete  para eliminar un producto
router.delete('/:id', (req, res) => { //req.params.id es el id que se pasa por la url
   _.each(products, (product, index) => {
       if(product.id == req.params.id){
           products.splice(index, 1);//elimina el producto del array
       }
   } )
    res.json({msg: 'Product deleted'});
})

module.exports = router; //exportamos el router para poder usarlo en index.js 