import db from '../db.js'

export function getProducts() {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM product', (err, rows) => {
            if(err)
                reject(err);
            else
                resolve(rows);
        });
    });
}

export function getProductsCategory(category) {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM product WHERE category=(?)', category, (err, rows) => {
            if(err)
                reject(err);
            else
                resolve(rows);
        });
    });
}

export function getProductById(id) {
    return new Promise((resolve, reject) => {
        db.get('SELECT * FROM product WHERE id=(?)', id, (err, rows) => {
            if(err)
                reject(err);
            else
                resolve(rows);
        });
    });
}

export function getProductByName(name) {
    return new Promise((resolve, reject) => {
        db.get('SELECT * FROM product WHERE name = (?)', name, (err, rows) => {
            if(err)
                reject(err);
            else
                resolve(rows);
        });
    });
}

export function getProductLikeName(name) {
    return new Promise((resolve, reject) => {
        console.log(`%${name}%`);
        
        db.all('SELECT * FROM product WHERE name LIKE (?)', `%${name}%`, (err, rows) => {
            if(err)
                reject(err);
            else
                resolve(rows);
        });
    });
}

export function createProduct(name, description, price, category, status, dateAdded, expiration, img) {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO product (name, description, price, category, status, dateAdded, expiration, img) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', 
                [name, description, price, category, status, dateAdded, expiration, img], (err) => {
            if(err)
                reject(err);
            else
                resolve();
        });
    });
}

export function editProduct(id, name, description, price, category, sold, status, expiration, img) {
    return new Promise((resolve, reject) => {
        db.run('UPDATE product SET name = (?), description = (?), price = (?), category = (?), sold = (?), status = (?), expiration = (?), img = (?) WHERE id = (?)', 
                [name, description, price, category, sold, status, expiration, img, id], (err) => {
            if(err)
                reject(err);
            else
                resolve();
        });
    });
}

export function deleteProduct(id) {
    return new Promise((resolve, reject) => {
        db.run('DELETE FROM product WHERE id = (?)', id, (err) => {
            if(err)
                reject(err);
            else
                resolve();
        });
    });
}
