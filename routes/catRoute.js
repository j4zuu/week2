'use strict';
const express = require('express')
const multer = require(('multer'))
const catController = require('../controllers/catController');
const router = express.Router()
const upload = multer({dest: 'uploads/' })

router.get('/', catController.cat_list_get);

router.get('/:id', catController.get_cat_by_id);

router.post('/', upload.single('cat'), catController.cat_create);

router.get('/:id', catController.get_cat_by_id)

module.exports = router;