import express from 'express';
import expressModel from './Schema/schema.js';


const app = express(); 

const PORT = 3230

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
app.post('/user',async (req,res)=>{
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