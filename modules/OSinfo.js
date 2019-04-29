const os = require('os');
const time = require('./time')
function getOSinfo() {
    let type = os.type();
    let release = os.release();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    let cpu = os.cpus()[0].model;
    let uptime = os.uptime();
    let userInfo = os.userInfo();
    console.log('System:', type);
    console.log('Release:', release);
    console.log('CPU model: ', cpu);
    console.log('Uptime: ~', time.print(uptime));
    console.log('User name:', userInfo.username);
    console.log('Home dir:', userInfo.homedir)
}
exports.print = getOSinfo;