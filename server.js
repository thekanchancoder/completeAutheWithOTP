import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);
import connectToDatabase from "./src/config/database.js";

connectToDatabase()


import app from './src/app.js';


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});