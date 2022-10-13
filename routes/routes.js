const express = require('express');
const Controller = require('../controllers/Controller');
const router = express.Router();

router.get('/',Controller.index)
router.get('/show',Controller.show)

module.exports= router