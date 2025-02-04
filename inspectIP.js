const { networkInterfaces } = require('os');
const interfaces = networkInterfaces();
for (var devName in interfaces) {
    var iface = interfaces[devName];

    for (var i = 0; i < iface.length; i++) {
    var alias = iface[i];
    if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal)
        return console.log(`Your IP: ${alias.address}`);
        
    }
}
throw Error('No network connection detected')