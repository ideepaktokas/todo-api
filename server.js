import {app} from './src/app.js';
import {connectDB} from './src/db/mongoose.js';


connectDB();

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server start on port ${PORT} in ${process.env.NODE_ENV} mode`);
})

// for readme.md we can use stackedit.io