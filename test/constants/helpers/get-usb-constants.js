const filterObj = require("filter-obj");

const libUsbConstantPrefix = "LIBUSB_";

const filterObjectPropertiesByPrefix = (obj, prefix) =>
    filterObj(
        obj,
        (key) => key.startsWith(prefix)
    );

const getUsbConstants = (usb) => {
    const usbConstants = filterObjectPropertiesByPrefix(usb, libUsbConstantPrefix);

    return usbConstants;
};

module.exports = getUsbConstants;
