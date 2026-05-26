import fs from 'node:fs';
import { pipeline } from 'node:stream/promises';
import zlib from 'node:zlib';

// const readableStream = fs.createReadStream("./this.txt",{
//   encoding: "utf8",
//   highWaterMark: 5*1024//by default 64KB
// })

// //Listen for data events
// readableStream.on("data", (chunk) => {
//   console.log('----- Received a new chunk ------');
//   console.log(chunk);
// })

// readableStream.on("end", () => {
//   console.log('Finished reading file.');
// })


// const writableStream = fs.createWriteStream("./output.txt");

// writableStream.write("HELLO WORLD \n");
// writableStream.write("Writing another chunk of data.\n");

// // Signify that no mroe data will me written.
// writableStream.end();

// writableStream.on("finish", () => {
//   console.log('All data written securely')
// })

const readStream = fs.createReadStream('this.txt');
const writeStream = fs.createWriteStream("output.txt");

readStream.pipe(writeStream);

async function compressFiles(){
  try {
    await pipeline(
      fs.createReadStream('this.txt'),
      zlib.createGzip(),
      fs.createWriteStream('input.txt.gz')
    );
    console.log('Compression successful.');
  } catch (error) {
    console.log('Pipeline failed', error);
  }
}

// compressFiles();