const express = require('express')
const mongoose = require('mongoose')
const Router = require('./routes/routes')
const ApiRouter = require('./routes/API/api')
const app = express()
const port = process.env.PORT  || 3000 

// dataBase Connection 
    mongoose.connect("mongodb://localhost/minhaz",{
        useNewUrlParser: true, useUnifiedTopology: true
    })
    .then(()=>{ console.error("Database connected successfully") })
    .catch((err)=>{console.log(err)})
//End dataBase Connection 

app.use(express.json());
app.use('/',Router);
// app.use('/api',ApiRouter);
app.listen(port, () => console.log(`App listening on port ${port}!`));


