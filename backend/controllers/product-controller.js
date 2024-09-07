export const getAllProducts = async (req,res,next) => {
    return res.status(200).json({'products': []})
}

export const searchProducts = async (req,res,next) => {
    return res.status(200).json({'products': []})
}

export const getProductsByCategory = async (req,res,next) => {
    return res.status(200).json({'products': []})
}

export const viewProduct = async (req,res,next) => {
    return res.status(200).json({'product': {}})
}

export const addProduct = async (req,res,next) => {
    return res.status(200).json({'msg': 'product created.'})
}

export const updateProduct = async (req,res,next) => {
    return res.status(200).json({'msg': 'product updated.'})
}

export const removeProduct = async (req,res,next) => {
    return res.status(200).json({'msg': 'blog deleted.'})
}