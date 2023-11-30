import dotenv from "dotenv";
dotenv.config();
import express from "express";
import dbConnect from "../config/dbConnect.js";
import { globalErrhandler, notFound } from "../middlewares/globalErrHandler.js";
import userRoutes from "../routes/usersRoute.js";
import productsRouter from "../routes/productsRouter.js";


//db connect

dbConnect();
const app = express();
//pass 
app.use(express.json());
//routes
app.use("/api/v1/users/", userRoutes);
app.use("/api/v1/products/", productsRouter);
//err middleware
app.use(notFound);
app.use(globalErrhandler);


export default app;