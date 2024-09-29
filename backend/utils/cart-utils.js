import db from '../db.js'

export function getCartByUserId(accId) {
    return new Promise((resolve, reject) => {
        db.all('SELECT itemId, quantity FROM cart WHERE accId=(?)', accId, (err, rows) => {
            if(err)
                reject(err);
            else
                resolve(rows);
        });
    });
}

export function getItemById(accId, itemId) {
    return new Promise((resolve, reject) => {
        db.get('SELECT * FROM cart WHERE accId=(?) AND itemId=(?)', [accId, itemId], (err, rows) => {
            if(err)
                reject(err);
            else
                resolve(rows);
        });
    });
}

export function addItem(accId, itemId, quantity) {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO cart VALUES (?, ?, ?)', [accId, itemId, quantity], (err) => {
            if(err)
                reject(err);
            else
                resolve();
        });
    });
}

export function removeItem(accId, itemId) {
    return new Promise((resolve, reject) => {
        db.run('DELETE FROM cart WHERE accId=(?) AND itemId=(?)', [accId, itemId], (err) => {
            if(err)
                reject(err);
            else
                resolve();
        });
    });
}

export function editCart(accId, itemId, quantity) {
    return new Promise((resolve, reject) => {
        db.run('UPDATE cart SET quantity=(?) WHERE accId=(?) AND itemId=(?)', [quantity, accId, itemId], (err) => {
            if(err)
                reject(err);
            else
                resolve();
        });
    });
}

export function clearCart(accId) {
    return new Promise((resolve, reject) => {
        db.run('DELETE FROM cart WHERE accId=(?)', accId, (err) => {
            if(err)
                reject(err);
            else
                resolve();
        });
    });
}
