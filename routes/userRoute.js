'use strict';
const express = require('express')
const multer = require(('multer'))
const userController = require('../controllers/userController');
const router = express.Router()
const upload = multer({dest: 'uploads/' })

router.get('/', userController.user_list_get);

router.get('/:id', userController.get_user_by_id);

router.post('/', upload.single('cat'), userController.user_create);

router.get('/:id', userController.get_user_by_id)

module.exports = router;