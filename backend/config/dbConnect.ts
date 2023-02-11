import mongoose, { ConnectOptions } from "mongoose";

mongoose.set("strictQuery", true);
const connectDb = () => {
  mongoose
    .connect(`${process.env.MONGO_DB_URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions)
    .then((conn) => {
      console.log(`Connected to mongoose on ${conn.connection.host} `);
    });
};

export default connectDb;