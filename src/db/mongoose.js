import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then((c) => {
    console.log(`MongoDB connected to host ${c.hostname}`);
  })
  .catch((error) => console.log(error));
