import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDb } from "./config/configdb.js";
import bookRouter from "./routes/bookroutes.js";
import { config } from "dotenv";

const app = express();

// for working of dotenv set path 
config({
    path:"./configure.env",
});

// connect database
connectDb();


// MIDDLEWARES
app.use(express.json());
app.use(cookieParser());

var corsOptions = {
    // afterwards we can change it to frontend URL
    origin:"http://localhost:8081",
};

app.use(cors(corsOptions));

// bookRouter
app.use('/api', bookRouter);


// default url
app.use('/',(req,res)=>{
    res.send("Please enter a valid url");
});


app.listen(process.env.PORT, (req,res) => {
    console.log(`server is port fine on ${process.env.PORT}`);
});
