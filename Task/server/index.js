import express from 'express'
import dotenv from 'dotenv'
import { userRoute } from './routes/userRoute.js';
import cors from 'cors'
import mongoose from 'mongoose';

dotenv.config();

const app=express();
const Port=process.env.PORT;

app.use(express.json()); 
app.use(cors(
    {
        origin:'http://localhost:5173',
        credentials:true,
    }
))

app.use('/',userRoute)

mongoose.connect('mongodb://localhost:27017/oncolab')
.then(() => console.log('Database connected successfully'))
.catch(err => console.error('Database connection error:', err));


app.listen(Port,()=>{
    console.log(`Server is listening to ${Port}`);
    
})