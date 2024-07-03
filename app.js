const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

const connectDb = require("./db/connect");
require("dotenv").config();
const notFound = require('./middleware/not-found')
const errorHandelerMiddleware = require('./middleware/error-handeler')
//middleware

app.use(express.static("./public"));

app.use(express.json());

//static files

app.use("/api/v1/tasks", tasks);

app.use(notFound)
app.use(errorHandelerMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`the app is runnig in ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
