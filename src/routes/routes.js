'use strict'
require('express-router-group');
const router  = require('express').Router();
const uploadFileController = require('../controllers/UploadFileController.js');
const UploadFileController = new uploadFileController();

router.post('/api/uploadCSV', UploadFileController.handleFileUpload(),UploadFileController.UploadCSVFile.bind(UploadFileController));
module.exports = router;