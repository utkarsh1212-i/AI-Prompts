import mongoose, { mongo } from "mongoose";

let isConnect = false;

export const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnect) {
    console.log("Mongo DB is connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "sharePrompts",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnect = true;
    console.log("MONGO DB is Connected");
  } catch (err) {
    console.log(err);
  }
};
