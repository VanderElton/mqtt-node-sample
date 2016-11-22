var iotf = require("ibmiotf");
var config = require("./device.json");

var deviceClient = new iotf.IotfDevice(config);

//setting the log level to debug. By default == 'warn'
deviceClient.log.setLevel('debug');

deviceClient.connect();

deviceClient.on('connect', function () {
  var i = 0;
  console.log("connected");
  setInterval(function function_name() {
    i++;
    deviceClient.publish('myevt', 'json', '{"value":' + i + '}', 2);
  }, 2000);
});