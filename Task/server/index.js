import express from 'express'
import dotenv from 'dotenv'
import { userRoute } from './routes/userRoute.js';

dotenv.config();

const app=express();
const Port=process.env.PORT;

// app.get('/',(req,res)=>{
//     res.send("Hello")
    
// })
app.use('/',userRoute)

app.listen(Port,()=>{
    console.log(`Server is listening to ${Port}`);
    
})