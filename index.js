import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";
import "dotenv/config";
import routes from "./src/routes/index.js";

const app = express();

const corsOptions ={
  origin:'https://selfkicks.vercel.app',
  allowedHeaders: ['Content-Type', 'Access-Control-Allow-Origin','Authorization']
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors(corsOptions));

app.use("/api/v1", routes);

const port = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("Mongodb connected");
}).catch((err) => {
  console.log('error')
  console.log({ err });
});

//test