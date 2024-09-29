import db from '../db.js'

export function getUserById(id) {
    return new Promise((resolve, reject) => {
        db.get('SELECT id, name, mail, phone FROM account WHERE id=(?)', id, (err, rows) => {
            if(err)
                reject(err);
            else
                resolve(rows);
        });
    });
}

export function getUserByName(name, password) {
    return new Promise((resolve, reject) => {
        db.get('SELECT id, name, mail, phone FROM account WHERE mail=(?) and password=(?)', [name, password], (err, rows) => {
            if(err)
                reject(err);
            else
                resolve(rows);
        });
    });
}

export function addUser(name, mail, phone, password) {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO account (name, mail, phone, password) VALUES (?, ?, ?, ?)', [name, mail, phone, password], (err) => {
            if(err)
                reject(err);
            else
                resolve();
        });
    });
}

export function editUser(id, phone, password) {
    return new Promise((resolve, reject) => {
        db.run('UPDATE account SET phone=(?), password = (?) WHERE id = (?)', [phone, password, id], (err) => {
            if(err)
                reject(err);
            else
                resolve();
        });
    });
}

export function deleteUser(id) {
    return new Promise((resolve, reject) => {
        db.run('DELETE FROM account WHERE id = (?)', id, (err) => {
            if(err)
                reject(err);
            else
                resolve();
        });
    });
}
