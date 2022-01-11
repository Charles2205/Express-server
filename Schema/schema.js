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
        required:true,
        min: '2020-09-22',
        max: '2022-09-14',

    },
    school:{
        type: String,
        required: true,
    },
});
const expressModel=model('express',expressSchema);
export default expressModel;