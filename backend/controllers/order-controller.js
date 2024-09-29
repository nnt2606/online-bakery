import { getOrders, getOrdersByUser, getOrderById, getLatestOrder, addOrder, getOrderItems, addOrderItem, updateOrderStatus } from '../utils/order-utils.js'
import { getAdminById } from '../utils/admin-utils.js'
import { getProductById } from '../utils/product-utils.js'
import { getCartByUserId, clearCart } from '../utils/cart-utils.js'

export const getAllOrder = async (req,res,next) => {
    try {
        const admin = await getAdminById(req.params.adminId);
        if(!admin) {
            return res.status(404).json({'msg': 'unauthorized'})
        }

        const orders = await getOrders();

        if(orders instanceof Array) {
            for (const order of orders) {
                const orderItems = await getOrderItems(order['id']);  // Fetch each product by its ID
                const items = []

                if (orderItems instanceof Array) {
                    for (const item of orderItems) {
                        const product = await getProductById(item['itemId']);  // Fetch each product by its ID
                        
                        if (product) {
                            items.push({
                                'item': product,
                                'quantity': item['quantity']
                            });
                        }
                    }
                }

                if (items.length === 0) {
                    return res.status(408).json({'msg': 'no item in order'});
                }

                order['items'] = items
            }
            return res.status(200).json(orders)
        } else {
            return res.status(404).json({'msg': 'orders not found'});
        }
    } catch (error) {
        console.log(error);
        return res.status(408).json({'msg': error})
    }
}

export const getOrderHistory = async (req,res,next) => {
    try {
        const orders = await getOrdersByUser(req.params.id);

        if(orders instanceof Array) {
            for (const order of orders) {
                const orderItems = await getOrderItems(order['id']);  // Fetch each product by its ID
                const items = []

                if (orderItems instanceof Array) {
                    for (const item of orderItems) {
                        const product = await getProductById(item['itemId']);  // Fetch each product by its ID
                        
                        if (product) {
                            items.push({
                                'item': product,
                                'quantity': item['quantity']
                            });
                        }
                    }
                }

                if (items.length === 0) {
                    return res.status(408).json({'msg': 'no item in order'});
                }

                order['items'] = items
            }
            return res.status(200).json(orders)
        } else {
            return res.status(404).json({'msg': 'orders not found'});
        }
    } catch (error) {
        console.log(error);
        return res.status(408).json({'msg': error})
    }
}

export const viewOrder = async (req,res,next) => {
    try {
        const order = await getOrderById(req.params.id);

        if(!order) {
            return res.status(404).json({'msg': 'order not found'});
        } 

        const orderItems = await getOrderItems(req.params.id)
        const items = []

        if (orderItems instanceof Array) {
            for (const item of orderItems) {
                const product = await getProductById(item['itemId']);  // Fetch each product by its ID
                
                if (product) {
                    items.push({
                        'item': product,
                        'quantity': item['quantity']
                    });
                }
            }
        }

        if (items.length === 0) {
            return res.status(408).json({'msg': 'no item in order'});
        }

        order['items'] = items
        return res.status(200).json(order)
    } catch (error) {
        console.log(error);
        return res.status(408).json({'msg': error})
    }
}

export const createOrder = async (req,res,next) => {
    const accId = req.body.accId;
    const note = req.body.note;
    const address = req.body.address;
    const total = req.body.total;
    const date = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });;

    try {
        await addOrder(accId, note, date, address, total);
        
        const order = await getLatestOrder(accId, date);

        if(order) {
            const cartItems = await getCartByUserId(accId);

            if(cartItems instanceof Array) {
                for (const item of cartItems) {
                    await addOrderItem(order['id'], item['itemId'], item['quantity']);  // Fetch each product by its ID
                }
                const orderItems = await getOrderItems(order['id']);  // Fetch each product by its ID
                const items = []

                if (orderItems instanceof Array) {
                    for (const item of orderItems) {
                        const product = await getProductById(item['itemId']);  // Fetch each product by its ID
                        
                        if (product) {
                            items.push({
                                'item': product,
                                'quantity': item['quantity']
                            });
                        }
                    }
                }

                if (items.length === 0) {
                    return res.status(408).json({'msg': 'no item in order'});
                }

                order['items'] = items
                await clearCart(accId);  // Clear the cart after placing order
            } else {
                return res.status(404).json({'msg': 'products not found'});
            }
            return res.status(200).json(order)
        } else {
            return res.status(404).json({'msg': 'order not found'});
        }
    } catch (error) {
        console.log(error);
        return res.status(408).json({'msg': error})
    }
}

export const approveOrder = async (req,res,next) => {
    const id = req.params.id;
    const adminId = req.body.adminId;
    const time = new Date().toString()

    try {
        await updateOrderStatus(id, adminId, 'approve', time);
        
        return res.status(200).json({'msg': 'order approved'})
    } catch (error) {
        console.log(error);
        return res.status(408).json({'msg': error})
    }
}

export const rejectOrder = async (req,res,next) => {
    const id = req.params.id;
    const adminId = req.body.adminId;
    const time = new Date().toString()

    try {
        await updateOrderStatus(id, adminId, 'reject', time);
        
        return res.status(200).json({'msg': 'order rejected'})
    } catch (error) {
        console.log(error);
        return res.status(408).json({'msg': error})
    }
}

export const closeOrder = async (req,res,next) => {
    const id = req.params.id;
    const adminId = req.body.adminId;
    const time = new Date().toString()

    try {
        await updateOrderStatus(id, adminId, 'close', time);
        
        return res.status(200).json({'msg': 'order closed'})
    } catch (error) {
        console.log(error);
        return res.status(408).json({'msg': error})
    }
}

export const cancelOrder = async (req,res,next) => {
    const id = req.params.id;
    const adminId = req.body.adminId;
    const time = new Date().toString()

    try {
        await updateOrderStatus(id, adminId, 'cancel', time);
        
        return res.status(200).json({'msg': 'order canceled'})
    } catch (error) {
        console.log(error);
        return res.status(408).json({'msg': error})
    }
}