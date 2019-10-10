#!/usr/bin/env node
const UVCControl = require("../..");

const getUvcControlsConstants = require("./helpers/get-uvc-control-constants");
const expandConstants = require("./helpers/expand-constants");

const constants = getUvcControlsConstants(UVCControl);
const expandedConstants = expandConstants(constants);

/* eslint-disable no-console */
console.log(JSON.stringify(expandedConstants, null, 2));
/* eslint-enable no-console */
