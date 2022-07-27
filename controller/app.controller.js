const express = require('express');
const  List  = require('../models/list');

const router = express.Router();

router.get('/:id', async(req, res, next) => {
    const { id } = req.params;
    
    try {
        const list = await List.findById(id);
        if (list === null) {
            res.status(404);
            return res.send({
                message: 'Data Tidak Ditemukan'
            }).json()
            
        }
        res.send(list);
    } catch(err) {
        res.send(err.message);
    }
})

router.get('/', async(req, res) => {
    try {
        const lists = await List.find();
        res.send(lists)
    } catch(err) {
        res.send(err.message);
    }
});

router.post('/', async(req, res) => {
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt
    try {
        const newList = new List({
            title: req.body.title,
            desc: req.body.desc,
            finished: req.body.finished,
            createdAt,
            updatedAt
        })

        const lists = await newList.save();
        res.send({
            message: 'Sukses Menambahkan to-do-list'
        }).json()
    } catch(err) {
        res.send(err.message);
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const list = await List.findByIdAndDelete(id);
        res.send({
            message: 'Berhasil dihapus'
        }).json();
    } catch(err) {
        res.send(err.message);
    }
});



router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;
    const getNewData = {...req.body, createdAt, updatedAt}
    try {
        const lists = await List.findByIdAndUpdate(id, getNewData);
        res.send(lists);
    } catch(err) {
        res.send(err.message);
    }
});





module.exports = router;