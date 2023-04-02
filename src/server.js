import {app} from './app.js';
import {connectDB} from './db/mongoose.js';


connectDB();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server start on port ${PORT} in ${process.env.NODE_ENV} mode`);
})

// for readme.md we can use stackedit.io