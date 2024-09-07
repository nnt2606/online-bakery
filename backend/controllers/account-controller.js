export const signup = async (req,res,next) => {
    return res.status(200).json({'msg': 'signed up.'})
}

export const signin = async (req,res,next) => {
    return res.status(200).json({'msg': 'signed in.'})
}

export const signout = async (req,res,next) => {
    return res.status(200).json({'msg': 'signed out.'})
}

export const editAccount = async (req,res,next) => {
    return res.status(200).json({'msg': 'edited.'})
}

export const deleteAccount = async (req,res,next) => {
    return res.status(200).json({'msg': 'deleted.'})
}