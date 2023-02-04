const mongoose= require('mongoose');
const DB = process.env.DB_URL;
mongoose.set("strictQuery", false);
mongoose.connect(DB).then(()=>{
    console.log("Connection with mongoDB successfull!");
}).catch((err)=>console.log("Unsuccessful connection"));