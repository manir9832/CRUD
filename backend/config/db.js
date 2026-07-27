const mongoose=require('mongoose');

const mongo=process.env.MONGO_URI
const dns=require('dns');

dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])

const connectDB=async()=>{
    try{
      await  mongoose.connect(mongo);
        console.log("mongodb connected successfully");
        console.log(mongoose.connection.host);

    }
    catch(error){
        console.log('error connection',error);
    }
}
connectDB();