const express = require('express')
const app = express()
const tasks = require('./routes/task')
const port = 3000


//middleware
app.use(express.json())

//static files
app.use(express.static('./public'))
app.use(('/api/v1/tasks'), tasks)

app.get('/hello', (req, res) => {
      res.send('hello task manager ')
})

app.listen(port, () => {
      console.log(`the app is runnig in ${port}`);
})