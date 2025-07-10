const mongoose=require("mongoose");


const connectDB = async () => {
    try{
        const connection=mongoose.connect("mongodb://127.0.0.1:27017/MyDataBase");
        console.log("MongoDB connected");

        // userModel.insertOne({name:"mamuni",age:30,email:"mamuni@gmail.com",password:"1234"})

        // const user=new userModel({
        //     name:"vicky",
        //     age:24,
        //     email:"vicky@gmail.com",
        //     password:3333
        // })

        // await user.save()

        // const data=await userModel.findOne();
        // console.log(data)
        // console.log("data saved")

      await  userModel.findByIdAndUpdate({_id:'686e135653952ae0eae97371'},{name:"Traya",age:87,email:"traya@gmail.com",password:"29889"});
        console.log("data updated")
        
    }catch(error){
        console.log("Error",error)
    }
}


const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
       type:Number,
       required:true
    } ,
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})



const userModel=mongoose.model("user",userSchema);

module.exports=userModel;

module.exports=connectDB;