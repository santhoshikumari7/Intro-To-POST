const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


let app = express();
app.use(cors());
app.use(express.json());

app.post("/signup",async(req,res)=>{
console.log(req.body);

try{
    let newUser = new User ({
        firstName:req.body.firstName,
        lastName:req.body.firstName,
        age:req.body.age,
        email:req.body.email,
        password:req.body.password,
        moileNo:req.body.moileNo,
        profilePic:req.body.profilePic,
    
    });
    
    await User.insertMany([newUser]);
    
    res.json({status:"success",msg:"User created successfully."});
    

}catch(err){
    res.json({status:"failure",msg:"Unable to create account"})
}

});

app.listen(4567,()=>{
    console.log("Listening to port 4567");
});


let userSchema = new mongoose.Schema({
firstName:String,
lastName:String,
age:  Number,
email:String,
password:String,
mobileNo:String,
profilePic:String,

});

let User = new mongoose.model("users",userSchema,"users");

let insertDataIntoDB = ()=>{

    try{
        let newUser = new User({
            firstName:"Santhoshi",
            lastName:"Kumari",
            age: 30,
            email:"santhoshi77.kotyada@gmail.com",
            password:"santhu123",
            mobileNo:"+91-9988776655",
            
            });
      User.insertMany([newUser]);
      console.log("inserted data into DB successfully.");
    
    }catch(err){
        console.log("Unable to insert data into DB.");
    }
    };

    


let connectToMDB = async ()=>{
    try{
       await mongoose.connect("mongodb+srv://santhoshikumari:santhoshikumari@bath2408cluster.vp7w6.mongodb.net/Batch2408?retryWrites=true&w=majority&appName=Bath2408Cluster");

        console.log("Connected to MDB successfully.");

        insertDataIntoDB();
   
    }catch(err){
        console.log("Unable to connect to MDB.");
    }
};


connectToMDB();