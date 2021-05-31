'use strict';
require('dotenv').config();
const event=require('../event');
const fake = require('faker');
const storeName = process.env.STORE_NAME||'flowers';

function createCustomer() {
    let order ={
        store:storeName,
        orderID:fake.datatype.uuid(),
        customer:fake.name.findName(),
        address:`${fake.address.city()}, ${fake.address.stateAbbr()}`,
    }
    return order;
}

function newOrder() {
    event.emit('pickup',{
        event:'pickup',
        time: new Date().toISOString(),
        payload:createCustomer()
    });
}

function thankHandler(payload) {
    payload.event='delivered'
    console.log(`VENDOR: Thank you for delivering `+payload.payload.orderID);
    console.log('Event ',payload);
}

module.exports={ newOrder,thankHandler};