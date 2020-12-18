const express = require('express');
const { findOneAndDelete } = require('../models/blog');
const router = express.Router();

const Blog = require('../models/blog');

router.get('/', (req, res) => {
    Blog.find((err, data) => {
        if (err) {
            return res.json("error !!");
        }
        else {
            res.json(data);
        }
    })
});
router.get('/archive', (req, res) => {
    Blog.find((err, data) => {
        if (err) {
            return res.json("error !!");
        }
        else {
            res.json(data);
        }
    })
});

router.get('/:user', (req, res) => {
    Blog.find({
        author: req.params.user,
    },
    (err, data) => {
        if (err) {
            return res.json("error !!");
        }
        else {
            res.json(data);
        }
    });
});

router.post('/create', (req, res) => {
    Blog.create({
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        description: req.body.description,
    },
    (err, data) => {
        if (err) {
            return res.json('error !!');
        }
        else {
            res.json(data);
        }
    });
});

router.put('/update/:id', (req, res) => {
    Blog.findOneAndUpdate({
        _id: req.params.id
    },
    {
        $set: {
            title: req.body.title,
            description: req.body.description,
            content: req.body.content,
        }
    },
    (err, data) => {
        if (err) {
            return res.json("error !!");
        }
        else {
            res.json(data);
        }
    });
});

router.delete('/delete/:id', (req, res) => {
    Blog.findOneAndDelete({
        _id: req.params.id,
    },
    (err, data) => {
        if (err) {
            return res.json("error !!");
        }
        else {
            res.json(data);
        }
    });
});

module.exports = router;