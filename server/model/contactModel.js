import mongoose from "mongoose"

const contactSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required : true
    },
    lastName:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
        match: [/^\+?[0-9]{7,15}$/, "Numéro de téléphone invalide"]

    }
}
);

export default mongoose.model("Contact", contactSchema)