const express = require('express');
const app = express();
const port = 3000; // Change the port number if needed

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!'); // Send a response to the client
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});