import { getUserById, getUserByName, addUser, editUser, deleteUser } from '../utils/account-utils.js'

export const signup = async (req,res,next) => {
    const name = req.body.name;
    const mail = req.body.mail;
    const phone = req.body.phone;
    const password = req.body.password;
    
    
    try {
        const user = await getUserByName(mail, password);
        if(user) {
            return res.status(408).json({'msg': 'account exists'})
        } 
    } catch (error) {
        console.log(error);
        return res.status(408).json({'msg': error})
    }
    
    try {
        await addUser(name, mail, phone, password);
        
        const user = await getUserByName(mail, password);

        if(user) {
            return res.status(200).json(user)
        } else {
            return res.status(404).json({'msg': 'account not found'});
        }
    } catch (error) {
        console.log(error);
        return res.status(408).json({'msg': error})
    }
}
    

export const signin = async (req,res,next) => {
    try {
        const user = await getUserByName(req.body.mail, req.body.password);

        if(user) {
            user['isAdmin'] = false;
            return res.status(200).json(user)
        } else {
            return res.status(404).json({'msg': 'account not found'});
        }
    } catch (error) {
        console.log(error);
        return res.status(408).json({'msg': error})
    }
}

export const editAccount = async (req,res,next) => {
    const id = req.params.id;
    const phone = req.body.phone;
    const password = req.body.password;
    
    try {
        await editUser(id, phone, password);
        
        const user = await getUserById(id);

        if(user) {
            return res.status(200).json(user)
        } else {
            return res.status(404).json({'msg': 'account not found'});
        }
    } catch (error) {
        console.log(error);
        return res.status(408).json({'msg': error})
    }
}

export const deleteAccount = async (req,res,next) => {
    const id = req.params.id;
    
    try {
        const user = await getUserById(id);
        if(!user) {
            return res.status(404).json({'msg': 'account not found'})
        } 
    } catch (error) {
        console.log(error);
        return res.status(408).json({'msg': error})
    }
    
    try {
        await deleteUser(id);
        return res.status(200).json({'msg': 'account deleted'});
    } catch (error) {
        console.log(error);
        return res.status(408).json({'msg': error})
    }
}