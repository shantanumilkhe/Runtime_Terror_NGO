const mongoose= require('mongoose');
const DB = process.env.DATABASE;
mongoose.set("strictQuery", false);
mongoose.connect(DB).then(()=>{
    console.log("Connection with mongoDB successfull!");
}).catch((err)=>console.log("Unsuccessful connection"));