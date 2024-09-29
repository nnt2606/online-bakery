import db from '../db.js'

export function getAdminById(id) {
    return new Promise((resolve, reject) => {
        db.get('SELECT id, name, mail FROM admin WHERE id=(?)', id, (err, rows) => {
            if(err)
                reject(err);
            else
                resolve(rows);
        });
    });
}

export function getAdminByName(name, password) {
    return new Promise((resolve, reject) => {
        db.get('SELECT id, name, mail FROM admin WHERE mail=(?) and password=(?)', [name, password], (err, rows) => {
            if(err)
                reject(err);
            else
                resolve(rows);
        });
    });
}

export function createAdmin(name, mail, password) {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO admin (name, mail, password) VALUES (?, ?, ?)', [name, mail, password], (err) => {
            if(err)
                reject(err);
            else
                resolve();
        });
    });
}

export function updateAdmin(id, password) {
    return new Promise((resolve, reject) => {
        db.run('UPDATE admin SET password = (?) WHERE id = (?)', [password, id], (err) => {
            if(err)
                reject(err);
            else
                resolve();
        });
    });
}

export function removeAdmin(id) {
    return new Promise((resolve, reject) => {
        db.run('DELETE FROM admin WHERE id = (?)', id, (err) => {
            if(err)
                reject(err);
            else
                resolve();
        });
    });
}