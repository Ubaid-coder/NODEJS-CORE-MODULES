
import fs from 'node:fs/promises';
import path from 'node:path';

// let filyHandle
// try {
//     // await fs.unlink('./this.txt');
//     filyHandle = await fs.open('./this.txt', 'r');
//    filyHandle.createReadStream({start: 90, end:99});
// } catch (error) {
//     console.log(error.message)
// } finally {
//     await filyHandle?.close();
// }

// const file = await fs.open("./this.txt",'r+');

// for await(const chunk of file.readLines()){
//     console.log(chunk)
// }
// await file.close();

// await file.truncate(4);

// try {
//     await fs.access('../../NotAllowed.txt');
//     console.log('can access');
// } catch (error) {
//     console.log('cannot access')
// }

// try {
//     await fs.copyFile('./source.txt','./destination.txt');
//     console.log('source.txt was copied to destination.txt');
// } catch (error) {
//     console.log(error.message);
// }

// for await (const entry of fs.glob("*.js")){
//     console.log(entry)
// }

// try {
//     const projectFolder = new URL('./test/project/',import.meta.url)
//     const createdDir = await fs.mkdir(projectFolder, {recursive:true});
//     console.log('created', createdDir);
// } catch (error) {
//     console.log(error.message)
// }

// try {
//     const directory = import.meta.dirname;
//     await fs.rmdir(directory+"/test")
// } catch (error) {
//     console.log(error.message)
// }

// try {
//     console.log(await fs.mkdtemp(path.join(os.tmpdir(), 'foo-')));
//     console.log('success');
// } catch (error) {
//     console.log(error.message)
// }

// try {
//     const files = await fs.readdir(import.meta.dirname);
//     for (const file of files){
//         console.log(file)
//     }

// } catch (error) {
//     console.log(error.message)
// }

// try {
//     const filePath = new URL('./this.txt',import.meta.url);
//     console.log(await fs.readFile(filePath, {encoding:'utf8'}))
// } catch (error) {
//     console.log(error)
// }

const filePath = new URL('./updated.txt', import.meta.url);

try {
    const readFile = await fs.readFile(filePath, {encoding:"utf8"});
    console.log(readFile)
    // const writeFile = await fs.writeFile(filePath, "This is random")
    // const appendFile = await fs.appendFile(filePath,'and this is the append text.')
    // const removeDirectory = await fs.rmdir(import.meta.dirname+'/directory', {recursive:true})
    // console.log(removeDirectory);
    // const newDir = await fs.mkdir(import.meta.dirname+'/test/tttt',{recursive:true})
    // const readDir = await fs.readdir(import.meta.dirname+"/test",{recursive:true});
    // console.log(readDir)
    // const rename = await fs.rename('./this.txt','updated.txt')
    const stat = await fs.stat(import.meta.filename)
    const lstat = await fs.lstat(import.meta.filename);
    const access = await fs.access(import.meta.filename);
    const chmod = await fs.chmod('./this.txt',0o400);
    const watch = await fs.watch('./updated.txt',0o400);
    
   
} catch (error) {
    console.log(error)
}