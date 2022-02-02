// ./index.js
// * Imports
// Dynamically load all routes from the ./routes folder


const express = require("express"); // Imports Express's class definition
const morgan = require("morgan"); // Imports Morgan's class definition

// Imports from our class modules

const Blockchain = require("./src/blockchain");
// Initialize express's class object
const app = express();
// Tell Express to use Morgan for logging requests to the console
app.use(morgan("dev")); // Pretty-print requests with the "dev" format

// Create the port number for the server to listen on
const port = 8080; // See: Wikipedia's List of TCP and UDP port numbers
// Global variables

global.difficulty = 3; // Difficulty to mine a particular block

global.blockchain = new Blockchain(); // Our copy of the blockchain

global.transactions = []; // Our current transactions
// Configure our server to run
require("./routes")(app);
require("./mine")(app);
require("./listtransactions")(app);
require("./chain")(app);
require("./newtransaction")(app);
require("./validate")(app);

app.listen(port, () => {
    // Log that our server is running in the terminal
    console.log(`Server is listening at http://localhost:${port}/`);
});