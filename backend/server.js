const express = require("express");
const config = require("./config/config");
const app = express();
const mysql = require("mysql2/promise");
const PORT = 8000;
const cors = require("cors");
const colors = require("colors");
const db = require("./services/db");
const todoRouter = require("./routes/todo");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/", todoRouter);

app.use((err, req, res, next) => {

    const statusCode = res.statusCode ? res.statusCode : 500;

    res.status(statusCode).json({error: err.message});
    return;
});


app.listen(PORT, function () {
    console.log("Server is listening!".cyan.underline.bold);
});

