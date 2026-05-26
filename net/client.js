import net from 'node:net';


//connect to server
const client = net.createConnection({port: 3000, host:'127.0.0.1'}, () => {
    console.log('Connected to server!');

    //Send initial data to the server
    client.write('Hello from client\n');
});
client.setEncoding("utf8");

//listen for incoming data from the server
client.on("data", (data) => {
    console.log(data);

    //close connection cleanly after getting the response
    // client.end();
})

client.on("end", ()=> {
    console.log('Disconnected from server.');
})

client.on("error", (err) => {
    console.log('Error occured', err);
})