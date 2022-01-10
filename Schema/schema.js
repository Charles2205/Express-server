import mongoose from 'mongoose';
const {Schema,model} = mongoose;
const expressSchema = Schema({
    firstname:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    dateOfBirth:{
        type: Date,
        required:true

    },
    school:{
        type: String,
        required: true,
    },
});
const expressModel=model("express",expressSchema);
export default expressModel;