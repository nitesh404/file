require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const cors = require("cors");
// Cors

// ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:3300'

// Default configuration looks like
// {
//     "origin": "*",
//     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//     "preflightContinue": false,
//     "optionsSuccessStatus": 204
//   }

app.use(cors());
app.use(express.static("public"));

const connectDB = require("./config/db");
connectDB();

app.use(express.json());
app.use(cors());
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

// Routes
app.use("/api/files", require("./routes/files"));
app.use("/files", require("./routes/show"));
app.use("/files/download", require("./routes/download"));

app.listen(PORT, console.log(`Listening on port ${PORT}.`));
