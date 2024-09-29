import { getProducts, getProductsCategory, getProductById, getProductByName, getProductLikeName, createProduct, editProduct, deleteProduct } from '../utils/product-utils.js'

export const getAllProducts = async (req,res,next) => {
    try {
        const products = await getProducts();

        if(products instanceof Array) {
            return res.status(200).json(products)
        } else {
            return res.status(404).json({'msg': 'products not found'});
        }
    } catch (error) {
        console.log(error);
        return res.status(408).json({'msg': error})
    }
}

export const searchProducts = async (req,res,next) => {
    try {
        const products = await getProductLikeName(req.query.q);

        if(products instanceof Array) {
            return res.status(200).json(products)
        } else {
            return res.status(404).json({'msg': 'products not found'});
        }
    } catch (error) {
        console.log(error);
        return res.status(408).json({'msg': error})
    }
}

export const getProductsByCategory = async (req,res,next) => {
    try {
        const products = await getProductsCategory(req.query.q);

        if(products instanceof Array) {
            return res.status(200).json(products)
        } else {
            return res.status(404).json({'msg': 'products not found'});
        }
    } catch (error) {
        console.log(error);
        return res.status(408).json({'msg': error})
    }
}

export const viewProduct = async (req,res,next) => {
    try {
        const product = await getProductById(req.params.id);

        if(product) {
            return res.status(200).json(product)
        } else {
            return res.status(404).json({'msg': 'product not found'});
        }
    } catch (error) {
        console.log(error);
        return res.status(408).json({'msg': error})
    }
}

export const addProduct = async (req,res,next) => {
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const category = req.body.category;
    const status = req.body.status;
    const expiration = req.body.expiration;
    const img = req.body.img;
    const dateAdded = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });;
    
    try {
        console.log(name);
        
        const product = await getProductByName(name);
        
        if(product) {
            return res.status(408).json({'msg': 'product exists'})
        } 
    } catch (error) {
        console.log(error);
        return res.status(408).json({'msg': error})
    }
    
    try {
        await createProduct(name, description, price, category, status, dateAdded, expiration, img);
        
        const product = await getProductByName(name);

        if(product) {
            return res.status(200).json(product)
        } else {
            return res.status(404).json({'msg': 'product not found'});
        }
    } catch (error) {
        console.log(error);
        return res.status(408).json({'msg': error})
    }
}

export const updateProduct = async (req,res,next) => {
    const id = req.params.id;
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const category = req.body.category;
    const sold = req.body.sold;
    const status = req.body.status;
    const expiration = req.body.expiration;
    const img = req.body.img;
    
    try {
        await editProduct(id, name, description, price, category, sold, status, expiration, img);
        
        const product = await getProductById(id);

        if(product) {
            return res.status(200).json(product)
        } else {
            return res.status(404).json({'msg': 'product not found'});
        }
    } catch (error) {
        console.log(error);
        return res.status(408).json({'msg': error})
    }
}

export const removeProduct = async (req,res,next) => {
    const id = req.params.id;
    
    try {
        const product = await getProductById(id);
        if(!product) {
            return res.status(404).json({'msg': 'product not found'})
        } 
    } catch (error) {
        console.log(error);
        return res.status(408).json({'msg': error})
    }
    
    try {
        await deleteProduct(id);
        return res.status(200).json({'msg': 'product deleted'});
    } catch (error) {
        console.log(error);
        return res.status(408).json({'msg': error})
    }
}