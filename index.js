import dotenv from 'dotenv';
import express from 'express';
import expressModel from './Schema/schema.js';
import mongoose from 'mongoose';
import cors from 'cors';


const app = express(); 

dotenv.config();
//middlewares
app.use(cors());
app.use(express.json());

const PORT = 1230|| process.env.PORT;
const db = process.env.DB_URL;

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,  
}).then(() => console.log('Connected to DB'))
.catch(err => console.log(err));


app.get ('/',(req,res)=> {
    //res.send (to send respnse to the user)
    res.json({
        message: "Welcome New User"
    })
})

//Get all Users
app.get('/users',async (req,res)=> {
    const allUsers = await expressModel.find({});
    if(allUsers){
        return res.status(200).json({
            message:'Users fetched successfully',
            data:allUsers
        });
    }else {
        //error
        return res.status(500).json({
            message:'Ooops!,unable to fetch Users'
        });
    }
})

//create a user 
app.post('/user', async (req,res)=>{
    const {firstname,lastname,dateOfBirth,school} = req.body;
    const newUser =await expressModel.create({   
            firstname,
            lastname,
            dateOfBirth,
            school
    })
    if(newUser){
        //success
        return res.status(200).json({
            message:'User created successfully'
        })
    }else {
        return res.status(500).json({
            message: 'Error creating User'
        })
    }
})



app.listen((PORT), () => {
    console.log(`Your app is listening to port ${PORT}`);
});