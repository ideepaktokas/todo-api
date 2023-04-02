import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
    })
    .then((c) => {
      console.log(`MongoDB connected to host ${c.host}`);
    })
    .catch((error) => console.log(error));
};
