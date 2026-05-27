import crypto from 'node:crypto';

//Basic Hashing
const data = 'hello world';
const hash = crypto.createHash('sha256').update(data).digest("hex");
// console.log(hash)

//Hashing with salt
const password = 'mysecurepassword123';
const salt = crypto.randomBytes(16).toString('hex');
const iteration = 1000;
const keylen = 64;
const digest = 'sha512';

crypto.pbkdf2(password,salt,iteration,keylen,digest,(err,derivedKey) => {
    if (err) throw err;
    // console.log('salt: ', salt);
    // console.log('Hashed Password:', derivedKey.toString("hex"));
})

//Encryption and Decryption
const algorithm = 'aes-256-cbc';
const secretKey = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// ENCRYPTION
function encrypt(text) {
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

// --- DECRYPTION ---
function decrypt(encryptedText) {
  const decipher = crypto.createDecipheriv(algorithm, secretKey, iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
const message = 'Confidential payload data';
const encryptedMessage = encrypt(message);
// console.log('Encrypted:', encryptedMessage);
// console.log('Decrypted:', decrypt(encryptedMessage));




const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048, // Standard security length
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
});

console.log('Keys generated successfully.');

const secretData = 'Top secret corporate data';

// Encrypt with Public Key
const encryptedBuffer = crypto.publicEncrypt(publicKey, Buffer.from(secretData));
console.log('Encrypted (Base64):', encryptedBuffer.toString('base64'));

// Decrypt with Private Key
const decryptedBuffer = crypto.privateDecrypt(privateKey, encryptedBuffer);
console.log('Decrypted Text:', decryptedBuffer.toString('utf8'));
