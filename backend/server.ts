import app from "./app";
import connectDb from "./config/dbConnect";

connectDb();

const serverOn = () => {
  app.listen(process.env.PORT, () => {
    console.log(`App is listening to http://localhost:${process.env.PORT}`);
  });
};


serverOn()
