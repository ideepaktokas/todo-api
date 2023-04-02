import express from 'express';
import dotenv from 'dotenv';
// require('./db/mongoose');
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// using middlewares
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Set JS engine
// app.set('view engine', 'ejs')

// Register the routes
// app.use(userRouter)


app.get('/', (req, res) => {
    res.send('hello from ubuntu server');
})



app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`);
})

// app.get('/about', (req, res) => {
//     res.render('about', {name: 'Ravi Tokas', 'partner' : 'Unibig'});
//     // res.redirect('/success'
//     //res.sendFile('about.html');kt
// })
