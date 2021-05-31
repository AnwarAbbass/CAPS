'use strict';

const event = require('../event');
const vendor = require('./vendor');
const driver = require('./driver');

event.on('pickup',driver.pickup);
event.on('in-transit',driver.deliver);
event.on('delivered',vendor.thankHandler);

setInterval(() => {
    vendor.newOrder();
}, 5000);
