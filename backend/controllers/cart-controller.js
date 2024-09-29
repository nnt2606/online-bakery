import { getCartByUserId, getItemById, addItem, removeItem, editCart } from '../utils/cart-utils.js'
import { getProductById } from '../utils/product-utils.js'

export const getCart = async (req,res,next) => {
    try {
        const items = await getCartByUserId(req.params.id);
        const result = []

        if(items instanceof Array) {
            for (const item of items) {
                const product = await getProductById(item['itemId']);  // Fetch each product by its ID
                if (product) {
                    result.push({
                        'item': product,
                        'quantity': item['quantity']
                    });
                }
            }
            return res.status(200).json(result)
        } else {
            return res.status(404).json({'msg': 'products not found'});
        }
    } catch (error) {
        console.log(error);
        return res.status(408).json({'msg': error})
    }
}

export const addToCart = async (req,res,next) => {
    const id = req.params.id;
    const itemId = req.body.itemId;
    const quantity = req.body.quantity;
    
    try {
        const item = await getItemById(id, itemId)

        if (item) {
            return res.status(408).json({'msg': 'item already in cart'});
        }

        await addItem(id, itemId, quantity);
        
        const products = await getCartByUserId(id);

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

export const removeFromCart = async (req,res,next) => {
    const id = req.params.id;
    const itemId = req.body.itemId;
    
    try {
        const item = await getItemById(id, itemId)

        if (!item) {
            return res.status(408).json({'msg': 'item not in cart'});
        }

        await removeItem(id, itemId);
        
        const products = await getCartByUserId(id);

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

export const updateCart = async (req,res,next) => {
    const id = req.params.id;
    const itemId = req.body.itemId;
    const quantity = req.body.quantity;
    
    try {
        const item = await getItemById(id, itemId)

        if (!item) {
            return res.status(408).json({'msg': 'item not in cart'});
        }

        await editCart(id, itemId, quantity);
        
        const products = await getCartByUserId(id);

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