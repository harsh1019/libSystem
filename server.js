import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDb } from "./config/configdb.js";
import bookRouter from "./routes/bookroutes.js";


const app = express();


// connect database
connectDb();


// MIDDLEWARES
app.use(express.json());
app.use(cookieParser());

var corsOptions = {
    origin:"http://localhost:8081",
};

app.use(cors(corsOptions));

// bookRouter
app.use('/api', bookRouter);


// default url
app.use('/',(req,res)=>{
    res.send("Please enter a valid url");
});


const port = process.env.PORT;
app.listen(port, (req,res) => {
    console.log(`server is port fine on ${port}`);
});
