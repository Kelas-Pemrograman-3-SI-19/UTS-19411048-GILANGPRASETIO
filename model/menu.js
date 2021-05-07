const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuSchema = new Schema ({
    kodemenu: {
        type: String
    },
    namamakanan: {
        type: String
    },
    namaminuman: {
        type: String
    },
    harga:{
        type: String
    },
    nomermeja: {
        type: String
    }
})

module.exports = mongoose.model('menu', menuSchema)