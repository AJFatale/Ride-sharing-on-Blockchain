import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/Rideshare", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    email: String,
    mobile_no: String,
    driving_licence: String,
    password: String

})

const User = new mongoose.model("User", userSchema)

//Routes
app.post("/login", (req, res)=> {
    const { mobile_no, password} = req.body
    User.findOne({ mobile_no: mobile_no}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post("/register", (req, res)=> {
    const { email, driving_licence, mobile_no, password} = req.body
    User.findOne({mobile_no: mobile_no}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                email,
                driving_licence,
                mobile_no,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 
app.get("/userCount", (req,res)=> {
    User.count( {}, function(err, result){

        if(err){
            res.send(err)
        }
        else{
            res.json({ message:result})
        }

   })})

app.listen(9002,() => {
    console.log("BE started at port 9002")
})