import db from '../db.js'

export function getOrders() {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM `order`', (err, rows) => {

            if(err)
                reject(err);
            else
                resolve(rows);
        });
    });
}

export function getOrdersByUser(accId) {
    return new Promise((resolve, reject) => {
        db.all('SELECT id, note, date, address, total FROM `order` WHERE accId=(?)', accId, (err, rows) => {
            if(err)
                reject(err);
            else
                resolve(rows);
        });
    });
}

export function getOrderById(id) {
    return new Promise((resolve, reject) => {
        db.get('SELECT * FROM `order` WHERE id=(?)', id, (err, rows) => {
            if(err)
                reject(err);
            else
                resolve(rows);
        });
    });
}

export function getLatestOrder(accId, date) {
    return new Promise((resolve, reject) => {
        db.get('SELECT * FROM `order` WHERE accId=(?) AND date=(?) ORDER BY id DESC', [accId, date], (err, rows) => {
            if(err)
                reject(err);
            else
                resolve(rows);
        });
    });
}

export function addOrder(accId, note, date, address, total) {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO `order` (accId, note, date, address, total) VALUES (?, ?, ?, ?, ?)', [accId, note, date, address, total], (err) => {
            if(err)
                reject(err);
            else
                resolve();
        });
    });
}

export function getOrderItems(orderId) {
    return new Promise((resolve, reject) => {
        db.all('SELECT itemId, quantity FROM orderItem WHERE orderId=(?)', orderId, (err, rows) => {
            if(err)
                reject(err);
            else
                resolve(rows);
        });
    });
}

export function addOrderItem(orderId, itemId, quantity) {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO orderItem VALUES (?, ?, ?)', [orderId, itemId, quantity], (err) => {
            if(err)
                reject(err);
            else
                resolve();
        });
    });
}

export function getOrderStatus(orderId) {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM orderStatus WHERE orderId=(?)', orderId, (err, rows) => {
            if(err)
                reject(err);
            else
                resolve(rows);
        });
    });
}

export function updateOrderStatus(orderId, adminId, action, time) {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO orderStatus VALUES (?, ?, ?, ?)', [orderId, adminId, action, time], (err) => {
            if(err)
                reject(err);
            else
                resolve();
        });
    });
}