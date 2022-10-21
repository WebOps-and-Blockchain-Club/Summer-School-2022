<<<<<<< HEAD
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use("/", require("./routes"));

require("./config/mongoConnection");

const port = process.env.PORT;

app.listen(port, () => {
  console.log("server is listening");
});
=======
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use("/", require("./routes"));

require("./config/mongoConnection");

const port = process.env.PORT;

app.listen(port, () => {
  console.log("server is listening");
});
>>>>>>> bf48e58 (windows -> wsl)
