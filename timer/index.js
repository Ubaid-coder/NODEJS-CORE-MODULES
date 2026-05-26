import {
  setTimeout,
  setImmediate,
  scheduler
} from 'node:timers/promises';

// const res = await setTimeout(100, 'result');

// console.log(res);  // Prints 'result'

// const res = await setImmediate('result');

// console.log(res);  // Prints 'result'

await scheduler.wait(10000);