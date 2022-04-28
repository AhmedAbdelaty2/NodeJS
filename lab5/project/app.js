const express = require('express')
const app = express()

const indexRoutes = require('./routes/index_routes')
const driverRoutes = require('./routes/driver_routes')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/muber', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.json())

indexRoutes(app)
driverRoutes(app)

app.use((err, req, res, next)=>{
  res.status(422).send({error: err.message})
})
module.exports = app;
