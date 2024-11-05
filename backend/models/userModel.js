import mongoose from "mongoose"


const userScehma = new mongoose.Schema({

},{
    timestamps:true
})


const User = mongoose.model("User",userScehma)

export default User