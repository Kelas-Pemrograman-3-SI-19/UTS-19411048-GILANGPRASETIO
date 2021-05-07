const router = require('express').Router()
const menuController = require('../controller/menu')

router.post('/insert', (req, res) => {
    menuController.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getall', (req, res) => {
    menuController.getAll(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getbyid/:id', (req, res) => {
    menuController.getById(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.put('/update/:id', (req, res) => {
    menuController.update(req.params.id, req.body)
    .then(result => res.json(result))
    .catch(err => res.json (err))
})

router.delete('/delete/:id', (req, res) => {
    menuController.delete(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json (err))
})
module.exports = router