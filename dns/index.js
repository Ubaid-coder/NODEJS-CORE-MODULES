import dns from 'node:dns/promises';



// async function getIP (websiteName) {
//     try {
        
//         dns.lookup(websiteName, (err, address, family) => {
//             console.log('Address',address);
//             console.log('IPV',family)
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }
// getIP('youtube.com')

async function findMailServers() {
  try {
    // Fetches Mail Exchange records
    const mxRecords = await dns.resolveMx('gmail.com');
    console.log('Mail Servers:', mxRecords);
  } catch (err) {
    console.error(err);
  }
}
// findMailServers();
async function getAllIPs() {
  const options = { all: true }; // Fetches all IPv4 and IPv6 variations
  const addresses = await dns.lookup('google.com', options);
  console.log(addresses); 
  // Outputs: [{ address: '...', family: 4 }, { address: '...', family: 6 }]
}

// getAllIPs();



