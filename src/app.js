import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

//importing routes
import userRouter from './routers/userRouter.js';

export const app = express();



// using middlewares
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Set JS engine
// app.set('view engine', 'ejs')

// Register the routes
app.use('/api/v1/users', userRouter);


app.get('/', (req, res) => {
    res.send('hello from ubuntu 22 server');
});

// app.get('/about', (req, res) => {
//     res.render('about', {name: 'Ravi Tokas', 'partner' : 'Unibig'});
//     // res.redirect('/success'
//     //res.sendFile('about.html');kt
// })
