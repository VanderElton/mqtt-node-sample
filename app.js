var mqtt = require('mqtt')

// tcp://<org-id>.messaging.internetofthings.ibmcloud.com:1883
// ssl://<org-id>.messaging.internetofthings.ibmcloud.com:8883
var client  = mqtt.connect('ssl://63mrqf.messaging.internetofthings.ibmcloud.com:8883') 

client.on('connect', function () {
  client.subscribe('presence')
  client.publish('presence', 'Hello mqtt')
})
 
client.on('message', function (topic, message) {
  // message is Buffer 
  console.log(message.toString())
  client.end()
})