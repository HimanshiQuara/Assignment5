const os = require('os');

console.log('Operating System:', os.type());
console.log('Platform:', os.platform());
console.log('Total Memory:', os.totalmem() / 1024 / 1024, 'MB');
console.log('Free Memory:', os.freemem() / 1024 / 1024, 'MB');
console.log('CPU Architecture:', os.arch());
console.log('Number of CPUs:', os.cpus().length);
console.log('Home Directory:', os.homedir());
console.log('Temp Directory:', os.tmpdir());
