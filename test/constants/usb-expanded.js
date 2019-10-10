#!/usr/bin/env node
const usb = require("usb");

const getUsbConstants = require("./helpers/get-usb-constants");
const expandConstants = require("./helpers/expand-constants");

const constants = getUsbConstants(usb);
const expandedConstants = expandConstants(constants);

/* eslint-disable no-console */
console.log(JSON.stringify(expandedConstants, null, 2));
/* eslint-enable no-console */
