const express = require ('express')
const app = express()
const mongoose = require('mongoose')

//ini koding untuk konek ke database
mongoose.connect('mongodb://localhost:27017/UTSGILANGPRASETIO', {
useCreateIndex: true,
useNewUrlParser: true,
useUnifiedTopology: true
}).then(() => console.log('Berhasil Konek Ke Database'))
.catch(() => console.log('Gagal Konek Ke Database'))

app.use(express.json({
    extended: true,
    limit: '20mb'
}))

app.use(express.urlencoded({
    extended: true,
    limit: '20mb'
}))

app.use('/menu', require('./routes/menu'))

app.listen(3000, () => {
    console.log('server started')
})