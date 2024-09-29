import { getAdminById, getAdminByName, createAdmin, updateAdmin, removeAdmin } from '../utils/admin-utils.js'

export const addAdmin = async (req,res,next) => {
    const name = req.body.name;
    const mail = req.body.mail;
    const password = req.body.password;
    
    
    try {
        const admin = await getAdminByName(mail, password);
        if(admin) {
            return res.status(408).json({'msg': 'admin exists'})
        } 
    } catch (error) {
        console.log(error);
        return res.status(408).json({'msg': error})
    }
    
    try {
        await createAdmin(name, mail, password);
        
        const admin = await getAdminByName(mail, password);

        if(admin) {
            return res.status(200).json(admin)
        } else {
            return res.status(404).json({'msg': 'admin not found'});
        }
    } catch (error) {
        console.log(error);
        return res.status(408).json({'msg': error})
    }
}

export const adminSignin = async (req,res,next) => {
    try {
        const admin = await getAdminByName(req.body.mail, req.body.password);

        if(admin) {
            return res.status(200).json(admin)
        } else {
            return res.status(404).json({'msg': 'admin not found'});
        }
    } catch (error) {
        console.log(error);
        return res.status(408).json({'msg': error})
    }
}

export const editAdmin = async (req,res,next) => {
    const id = req.params.id;
    const password = req.body.password;
    
    try {
        await updateAdmin(id, password);
        
        const admin = await getAdminById(id);

        if(admin) {
            return res.status(200).json(admin)
        } else {
            return res.status(404).json({'msg': 'admin not found'});
        }
    } catch (error) {
        console.log(error);
        return res.status(408).json({'msg': error})
    }
}

export const deleteAdmin = async (req,res,next) => {
    const id = req.params.id;
    
    try {
        const admin = await getAdminById(id);
        if(!admin) {
            return res.status(404).json({'msg': 'admin not found'})
        } 
    } catch (error) {
        console.log(error);
        return res.status(408).json({'msg': error})
    }
    
    try {
        await removeAdmin(id);
        return res.status(200).json({'msg': 'admin deleted'});
    } catch (error) {
        console.log(error);
        return res.status(408).json({'msg': error})
    }
}