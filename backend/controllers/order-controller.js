export const getAllOrder = async (req,res,next) => {
    return res.status(200).json({'orders': []})
}

export const getOrderHistory = async (req,res,next) => {
    return res.status(200).json({'orders': []})
}

export const viewOrder = async (req,res,next) => {
    return res.status(200).json({'order': {}})
}

export const createOrder = async (req,res,next) => {
    return res.status(200).json({'msg': 'order created.'})
}

export const approveOrder = async (req,res,next) => {
    return res.status(200).json({'msg': 'order approved.'})
}

export const rejectOrder = async (req,res,next) => {
    return res.status(200).json({'msg': 'order rejected.'})
}

export const closeOrder = async (req,res,next) => {
    return res.status(200).json({'msg': 'order closed.'})
}

export const cancelOrder = async (req,res,next) => {
    return res.status(200).json({'msg': 'order canceled.'})
}