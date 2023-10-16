const express = require('express')
const cors = require('cors')
const connectDB = require('./Utility/connectDb')
const userRouter = require('./Routes/user')
const listingRouter = require('./Routes/listing')

const app = express()
const PORT = 5000; 

connectDB()
app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.json('home')
})
app.use('/user', userRouter)
app.use('/listing', listingRouter)


app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`); 
})