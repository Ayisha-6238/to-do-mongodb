const express=require('express');
const dbconnect = require('./configuration/dbConfig');
const userRouter=require('./Router/userRouters')


const app=express()

app.use(express.json())

dbconnect();

app.use('/',userRouter)



app.listen(3000,()=>{
    console.log('server is running');
    
})