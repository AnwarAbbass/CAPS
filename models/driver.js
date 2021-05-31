'use strict';

const event=require('../event');

function pickup(payload) {
    console.log('Event',payload);
    console.log('DRIVER: picked up '+payload.payload.orderID);
    setTimeout(()=>{
        event.emit('in-transit',payload);
    },1000)
}

function deliver(payload) {
    payload.event='in-transit';
    payload.time= new Date().toISOString();
    console.log('Event',payload);
    setTimeout(()=>{
        console.log('DRIVER: delivered up '+payload.payload.orderID);
        event.emit('delivered',payload);
    },3000);
}

module.exports={pickup,deliver};