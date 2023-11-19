import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import "express-async-errors";
import router from './Routes/Routes.routes';
import { AppError } from './error/AppError';

dotenv.config();
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended : false }))
app.use(express.static(path.join(__dirname, '..', 'front-end', 'dist')))
app.use(cors())
app.use(router)
app.use((err : Error, req : Request, res : Response, next : NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).send( { status : "error", message : err.message})
    }
    return res.status(500).json( {
        status : "error",
        message : `Internal Server Error - ${err.message}`
    })
})

app.listen(process.env.PORT);