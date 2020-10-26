const express = require("express");

// Middleware - Allow web app to make calls to our APIs
const cors = require("cors");
const pool = require("./server/db");
const PORT = process.env.PORT || 5000;
const path = require("path");
const apiRouter = require("./server/apiRouter");
// Run the express library 
const app = express();

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    // app.use(express.static) => allows us to serve static content that we specify in build folder
    app.use(express.static(path.join(__dirname, "client/build")));
}

// ROUTES 

// API endpoints
app.use("/api", apiRouter);

// Catchall
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});