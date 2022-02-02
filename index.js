// ./index.js
// * Imports
// Dynamically load all routes from the ./routes folder


const express = require("express"); // Imports Express's class definition
const morgan = require("morgan"); // Imports Morgan's class definition
const Blockchain = require("./src/blockchain");// Imports from our class modules

// Our current transactions

// Initialize express's class object
const app = express();
// Tell Express to use Morgan for logging requests to the console
app.use(morgan("dev")); // Pretty-print requests with the "dev" format

// Create the port number for the server to listen on
const port = 8080; // See: Wikipedia's List of TCP and UDP port numbers

// Configure our server to run
require("./routes")(app);
require("./chain")(app);
require("./mine")(app);
require("./newtransaction")(app);
require("./listtransactions")(app);
require("./validate")(app);

global.difficulty = 3; // Difficulty to mine a particular block

global.blockchain = new Blockchain(); // Our copy of the blockchain

global.transactions = []; 

app.listen(port, () => {
    // Log that our server is running in the terminal
    console.log(`Server is listening at http://localhost:${port}/`);
});
