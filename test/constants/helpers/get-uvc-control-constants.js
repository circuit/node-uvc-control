const getUvcControlsConstants = (UVCControl, uvcControlsConstants) => {
    return {
        constants: uvcControlsConstants,
        controls: UVCControl.controls,
    };
};

module.exports = getUvcControlsConstants;
