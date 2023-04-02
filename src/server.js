import {app} from './app.js';
import {connectDB} from './db/mongoose.js';


connectDB();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`);
})