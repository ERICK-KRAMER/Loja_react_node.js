const Products = require('../Models/Products')

exports.getProducts = async (req, res) => {
    try {
        const products = await Products.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

exports.createProducts = async(req, res) => {
    const { name, url_image, value, stock } = req.body;

    if(!name || !url_image || !value || !stock) {
        res.status(422).json( { message: "É necessario adicionar preencher todos os campos: 'name, url_image, value e stock'! "})
    }

    try {
        const newProduct = new Products({
            name,
            url_image,
            value,
            stock
        });
        await newProduct.save()
        res.status(201).json({ message: 'Produto adicionado com sucesso', product: newProduct });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

exports.deleteProducts = async(req, res) => {
    const { id } = req.params;
    try {
        const product = await Products.findByIdAndDelete(id);
        if(!product){
            res.status(404).json({ message: "produto nao encontrado" })
        }
        res.status(200).json({ message: "O produto foi removido", product: product });
    } catch (error) {
        res.status(500).json({ message : "Não foi possivel executar essa aplicação"})
    }
}

exports.updateProduct = async(req, res) => {
    const { id } = req.params;
    const { name, url_image, value, stock } = req.body;
    try {
        const updateProduct = await Products.findByIdAndUpdate(id, {
            name,
            url_image, 
            value,
            stock
        }, { new: true });
        if(!updateProduct){
            return res.status(404).json({ error: 'registro nao encontrado '});
        }
        res.status(200).json(updateProduct)
    } catch (error) {
        res.status(500).json({ message: "Não foi possivel localizar esse produto" })
    }
}
