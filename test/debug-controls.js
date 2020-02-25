const UVCControl = require("../index");
const Bluebird = require("bluebird");

const debug = async () => {
  const vid = parseInt(process.argv[2]) || 1133;

  const cam = new UVCControl({
    vid: vid
  });

  if (cam.device.deviceDescriptor.idVendor !== vid)
    console.error(
      `Input vendor ID (${vid}) does not match device vendor ID (${cam.device.deviceDescriptor.idVendor})`
    );

  console.dir(cam, {
    sorted: true
  });

  const controls = await Bluebird.reduce(
    cam.supportedControls,
    async (obj, name) => {
      let value = undefined;
      let range = undefined;

      try {
        await Bluebird.delay(10);

        value = await cam.get(name);
      } catch(error) {
        if (error && error.error.message) {
          value = error.error.message;
        } else {
          value = error;
        }
      }

      try {
        await Bluebird.delay(10);

        range = await cam.range(name);
      } catch(error) {
        range = error.toString().split(/[\r\n]+/)[0].trim();
      }

      obj[name] = {
        value,
        range
      }

      return obj;
    },
    {}
  );

  console.dir(controls, {
    sorted: true
  });
}

debug();