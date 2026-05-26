import {Console} from 'node:console';
import { createWriteStream } from 'node:fs';

const output = createWriteStream('./this.txt');
const logger = new Console({stdout: output});
const count = 5;
logger.log('count %d', count);

console.table([{a:1, b:'Y'},{a:'Z',b:2}]);

