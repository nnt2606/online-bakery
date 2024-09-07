export const addAdmin = async (req,res,next) => {
    return res.status(200).json({'msg': 'admin added.'})
}

export const adminSignin = async (req,res,next) => {
    return res.status(200).json({'msg': 'admin signed in'})
}

export const adminSignout = async (req,res,next) => {
    return res.status(200).json({'msg': 'admin signed out'})
}

export const editAdmin = async (req,res,next) => {
    return res.status(200).json({'msg': 'admin edited.'})
}

export const updateAdmin = async (req,res,next) => {
    return res.status(200).json({'msg': 'admin updated.'})
}

export const deleteAdmin = async (req,res,next) => {
    return res.status(200).json({'msg': 'admin deleted.'})
}