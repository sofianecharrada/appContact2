import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required : true
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
},
{
    timestamps: true,
}
);

export default mongoose.model("Users", userSchema)