const menuModel = require ('../model/menu')
const objectId = require ('mongoose').Types.ObjectId

exports.create = (data) =>
new Promise((resolve, reject) => {
    menuModel.create(data)
    .then(() => {
        resolve({
            status: true,
            pesan: 'Berhasil Input Menu'
        })
    }).catch(() => reject({
        status: false,
        pesan: 'Gagal Input Menu'
    }))
})

exports.getAll = () =>
new Promise((resolve, reject) => {
    menuModel.find()
    .then(result => {
        resolve({
            status: true,
            pesan: 'Berhasil Menampilkan Data',
            result: result
        })
    }).catch(() => reject({
        status: true,
        pesan: 'Gagal Mendapatkan Data',
        result: []
    }))
})

exports.getById = (id) =>
new Promise ((resolve, reject) => {
    menuModel.findOne({
        _id: objectId(id)
    }).then(result => resolve ({
        status: true,
        pesan: 'Berhasil Mendapatkan Data',
        result: result
    })).catch(() => reject ({
        status: false,
        pesan: 'Gagal Mendapatkan Data',
        result: null
    }))
})

exports.update = (id, data) =>
new Promise ((resolve, reject) => {
    menuModel.updateOne({
        _id: objectId(id)
    }, data).then (() => resolve ({
        status: true,
        pesan: 'Berhasil Update Data Baru'
    })).catch(() => reject({
        status: false,
        pesan: "Gagal Update Data"
    }))
})

exports.delete = (id) =>
new Promise((resolve, reject) => {
    menuModel.deleteOne({
        _id: objectId(id)
    }).then(() => resolve ({
        status: true,
        pesan: 'Berhasil Delete Data'
    })).catch(() => reject ({
        status: false,
        pesan: ' Gagal Update Data'

    }))
})