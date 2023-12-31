import dotenv from "dotenv";
dotenv.config();
import express from "express";
import dbConnect from "../config/dbConnect.js";
import { globalErrhandler, notFound } from "../middlewares/globalErrHandler.js";
import userRoutes from "../routes/usersRoute.js";
import productsRouter from "../routes/productsRouter.js";
import categoriesRouter from "../routes/categoriesRouter.js";
import brandsRouter from "../routes/brandsRouter.js";
import colorRouter from "../routes/colorRouter.js";



//db connect

dbConnect();
const app = express();
//pass 
app.use(express.json());
//routes
app.use("/api/v1/users/", userRoutes);
app.use("/api/v1/products/", productsRouter);
app.use("/api/v1/categories/", categoriesRouter);
app.use("/api/v1/brands/", brandsRouter);
app.use("/api/v1/colors/", colorRouter);
//err middleware
app.use(notFound);
app.use(globalErrhandler);


export default app;