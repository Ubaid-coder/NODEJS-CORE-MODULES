import os from 'os';

const platform = os.platform();
console.log(platform);

const type = os.type();
console.log(type);

const release = os.release();
console.log(release);

const arch = os.arch();
console.log(arch);

const version = os.version();
console.log(version);

const cpus = os.cpus();
console.log(cpus);

const memory = os.totalmem();
console.log(memory);

const freememory = os.freemem();
console.log(freememory);

const loadavg = os.loadavg();
console.log(loadavg);

const uptime = os.uptime();
console.log(uptime);

let hostname = os.hostname();
console.log(hostname)

const networkInterfaces = os.networkInterfaces();
console.log(networkInterfaces);

const tmpdir = os.tmpdir();
console.log(tmpdir);



console.log(`OS Platform: ${os.platform()}`);
console.log(`Architecture: ${os.arch()}`);
console.log(`Total Memory: ${(os.totalmem() / 1e9).toFixed(2)} GB`);
console.log(`Free Memory: ${(os.freemem() / 1e9).toFixed(2)} GB`);
console.log(`CPU Cores: ${os.cpus().length}`);
