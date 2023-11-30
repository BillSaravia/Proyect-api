import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    mongoose.set("strictQuery", false);
    const connected = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Mongodb connected ${connected.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default dbConnect;


//PSwryhhNkXEz8UeN
//nodejs-ecommerce-api
//nodejs-apiecommerce?retryWrites=true&w=majority
//mongodb+srv://nodejs-ecommerce-api:PSwryhhNkXEz8UeN@cluster0.wwcgevr.mongodb.net/nodejs-ecommerce-api?retryWrites=true&w=majority