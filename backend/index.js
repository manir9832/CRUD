const express=require('express')
const app=express()
const dotenv=require('dotenv')
require('dotenv').config()
require('./config/db')
const cors=require('cors')
const userRoutes=require('./routes/userRoutes')
const PORT=process.env.PORT || 4000

app.get('/',(req,res)=>{
    res.send("hello server")
})

app.use(cors())
app.use(express.json())
app.use('/api/auth',userRoutes)
app.listen(PORT,()=>{
    console.log(`server running on port http://localhost:${PORT}`)
})