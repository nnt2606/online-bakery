export const getAllBlogs = async (req,res,next) => {
    return res.status(200).json({'blogs': []})
}

export const viewBlog = async (req,res,next) => {
    return res.status(200).json({'blog': {}})
}

export const createBlog = async (req,res,next) => {
    return res.status(200).json({'msg': 'blog created.'})
}

export const updateBlog = async (req,res,next) => {
    return res.status(200).json({'msg': 'blog updated.'})
}

export const deleteBlog = async (req,res,next) => {
    return res.status(200).json({'msg': 'blog deleted.'})
}