#!/usr/bin/env node
const UVCControl = require("../..");
const uvcControlsConstants = require("../../lib/constants")

const getUvcControlsConstants = require("./helpers/get-uvc-control-constants");

const constants = getUvcControlsConstants(UVCControl, uvcControlsConstants);

/* eslint-disable no-console */
console.log(JSON.stringify(constants, null, 2));
/* eslint-enable no-console */
