const express=require("express");
const connectDB=require("./db")

const app=express();

const router=express.Router()

//connection method start
connectDB()

const port=8000;

const validation=(req,res,next)=>{
    console.log("Validation start");
    next();
}
const auth=(req,res,next)=>{
    console.log("Authentication start");
    next();
}

// app.use(validation);
// app.use(auth);
// app.get("/",(req,res)=>{
//     res.send("get method called");
// })

// app.post("/user",(req,res)=>{
//     res.send("post method called")
// })

router.get("/",validation,auth,(req,res)=>{
    res.send("get method called")
})

app.use("/api",router);
router.post("/user",validation,auth,(req,res)=>{
    res.send("post method called")
})

app.listen(port,(req, res)=>{
    console.log("Server is running on the port",port)
})