import net from 'node:net';

// Create a server instance
const server = net.createServer((socket) => {
    console.log('Client connected from: ',socket.remoteAddress, 'port:',socket.remotePort);

    //Set encoding so data arrives as a string, not a row Buffer
    socket.setEncoding("utf-8");

    // Triggered when the client sends data
    socket.on("data", (data) => {
        console.log(`Received: ${data.trim()}`);

        //Echo the data back to the client
        socket.write(`Server Echo: ${data}`);
    })

    // Triggered when the client terminates the connection
    socket.on("end", () => {
        console.log('Client Disconnected');
    })

    socket.on("error", (err) => {
        console.log('Socket error:', err.message);
    })
})

// Restrict the maximum number of concurrent client connections
server.maxConnections = 2;

server.on("connection", (socket) => {
     // Query server for total active connections
  server.getConnections((err, count) => {
    console.log(`Active concurrent connections: ${count}/${server.maxConnections}`);
  });

  // Enforce a connection timeout (e.g., 5 seconds of inactivity)
  socket.setTimeout(5000);
  
  socket.on('timeout', () => {
    console.log('Socket idle timeout reached. Closing connection.');
    socket.end(); // Graceful close
  });
})

//Start listening on PORT 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('TCP Server listening on port 3000');
})
