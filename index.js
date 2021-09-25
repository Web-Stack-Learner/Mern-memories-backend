import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import postRoutes from './routes/post.js'


const app = express()
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())
dotenv.config()

//Routes
app.use('/posts/',postRoutes)

//Mongoose
mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log(`Connection Successfull, Server Running On Port : ${process.env.PORT}`)
        })
    }).catch(err=>console.error(err))


