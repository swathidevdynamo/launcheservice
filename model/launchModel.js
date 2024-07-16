import mongoose from "mongoose";


const launchSchema = new mongoose.Schema({
    data : {
        type : Object, 
        required: [true, 'Path `data` is required.']
    }
})

export default mongoose.model("launches",launchSchema)
