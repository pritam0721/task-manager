const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const port = 3000
const connectDb = require("./db/connect")
require('dotenv').config()

//middleware
    
app.use(express.static('./public'))

app.use(express.json())

//static files

app.use(('/api/v1/tasks'), tasks)

const start = async () =>{
       try { 
             await connectDb(process.env.MONGO_URI)
            app.listen(port, () => {
                  console.log(`the app is runnig in ${port}`);
            })
       } catch (error) {
            
       }
}
start()