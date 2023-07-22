import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    // console.log("database of mongodb:   "+process.env.MONGO_URL)
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;
