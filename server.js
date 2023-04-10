require('./environment')

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

app.set("view engine", "ejs")
app.set("views", __dirname + '/views')
app.set('layout',  'layouts/layout')
app.use(expressLayouts)
app.use(express.static(__dirname + "/public"))

const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log("Connected to mongoose"))

const indexRouter = require('./routes/index')
const funnelRouter = require('./routes/funnel')
const signupRouter = require('./routes/signup')
const loginRouter = require('./routes/login')

app.use('/', indexRouter)
app.use('/funnel/', funnelRouter)
app.use('/login', loginRouter)
app.use('/signup', signupRouter)

app.listen(process.env.PORT || 3000)
