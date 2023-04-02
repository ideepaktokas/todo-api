import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { errorMiddleware } from './middleware/error.js';

dotenv.config();

//importing routes
import userRouter from './routers/userRouter.js';
import taskRouter from './routers/taskRouter.js';

export const app = express();

// using middlewares
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods:['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

// Set JS engine
// app.set('view engine', 'ejs')

// Register the routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/tasks', taskRouter);


app.get('/', (req, res) => {
    res.send('hello from ubuntu 22 server');
});

// app.get('/about', (req, res) => {
//     res.render('about', {name: 'Ravi Tokas', 'partner' : 'Unibig'});
//     // res.redirect('/success'
//     //res.sendFile('about.html');kt
// })

// Error Handler
app.use(errorMiddleware);


