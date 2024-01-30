const mongoose=require("mongoose");

require("dotenv").config();

const connectdb=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(console.log("connected database"))
    .catch((err)=>{
        console.log("error aa gaya ");
        console.log(err);
        process.exit(1);

    })
};

module.exports=connectdb;