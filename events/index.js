import Event from 'node:events';

const emiter = new Event.EventEmitter();

// emiter.on("newListener", (event, listener) => {
//     console.log(`Someone is subscribing to the event: ${event}`)
// })

emiter.once("onetime", () => {
    console.log('system is ready')
})

emiter.emit("onetime");


// emiter.on('event', () => {
//     console.log('an event occured');
// })

// emiter.emit("event");


// emiter.on('event', (a, b) => {
//   setImmediate(() => {
//     console.log('this happens asynchronously');
//   });
// });
// emiter.emit('event', 'a', 'b');

let m = 0;
// emiter.on('event', () => {
//     console.log(++m);
// })
// emiter.once('event', () => {
//     console.log(++m);
// })

// emiter.emit('event');
// emiter.emit('event');
// emiter.emit('event');

// emiter.emit('error', new Error('Whoops!'));

// emiter.once('newListener', (event, listener) => {
//     if (event == 'event'){
//         emiter.on('event', () => {
//             console.log('B');
//         });
//     }
// });

// emiter.on('event', () => {
//     console.log('A');
// })

// emiter.emit('event')

emiter.on('event', function listener(...args) {
    const parameter = args.join(', ');
    console.log(`event with parameters ${parameter}`);
})
emiter.emit('event', 1, 2, 3, 4, 5);

