#!/usr/bin/env node
const usb = require("usb");

const getUsbConstants = require("./helpers/get-usb-constants");

const constants = getUsbConstants(usb);

/* eslint-disable no-console */
console.log(JSON.stringify(constants, null, 2));
/* eslint-enable no-console */
