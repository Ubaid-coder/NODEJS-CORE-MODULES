import {Buffer} from 'node:buffer';

// Creates a zero-filled Buffer of length 10.
const buf1 = Buffer.alloc(10);

// Creates a Buffer of length 10,
// filled with bytes which all have the value `ubaid`.
const buf2 = Buffer.alloc(10, 'ubaid');

// Creates an uninitialized buffer of length 10.
const buf3 = Buffer.allocUnsafe(10);
buf3.fill('ubaid');

// Creates a Buffer containing the bytes [1, 2, 3].
const buf4 = Buffer.from([1,2,3]);


const buf5 = Buffer.from("Hello");
// console.log(buf5)
// console.log(buf5.toString())
// console.log(buf5[0])

const buf6 = Buffer.alloc(10);
buf6.write("Node");
// console.log(buf6.toString());

const part1 = Buffer.from('Open ');
const part2 = Buffer.from('Source ');
const combined = Buffer.concat([part1, part2]);
// console.log(combined.toString())

const buf7 = Buffer.allocUnsafe(100);
buf7.fill(0)
// console.log(buf7)

const blob = new Blob(['hello']);
// blob.bytes().then((byte) => console.log(byte));
// console.log(blob.size)