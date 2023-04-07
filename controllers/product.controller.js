const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
    try {
        let product;


        //Creamos el producto
        product = new Product(req.body);

        await product.save();

        res.send(product)

        console.log(req.body)
    } catch (error) {
        console.log('',error),
        res.status(500).send('Hubo un error ')
       
        
    }
}

exports.getAllProduct = async (req, res) => {
    try {
        const products = await Product.find();

        res.json(products)

    } catch (error) {
        console.log('',error),
        res.status(500).send('Hubo un error ')
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const { name, category, ubication, price } = req.body
        let product = await Product.findById(req.params.id);

        if (!product) {
            res.status(404).json({message: 'No existe el producto'})
        }
        
        product.name = name;
        product.category = category;
        product.ubication = ubication;
        product.price = price;

        product = await Product.findOneAndUpdate({_id: req.params.id}, product, {new:true})

        res.json(product);

    } catch (error) {
        console.log('',error),
        res.status(500).send('Hubo un error ')
    }
}

exports.getProduct = async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);

        if (!product) {
            res.status(404).json({message: 'No existe el producto'})
        }
      
        res.json(product);

    } catch (error) {
        console.log('',error),
        res.status(500).send('Hubo un error ')
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);

        if (!product) {
            res.status(404).json({message: 'No existe el producto'})
        }
      
        await Product.findOneAndRemove({_id: req.params.id})

        res.json({ message: 'Producto eliminado con exito'});

    } catch (error) {
        console.log('',error),
        res.status(500).send('Hubo un error ')
    }
}