const express = require('express');
const ProposalFormatsController = require('../controllers/proposalFormatsController');

// For file uploads
// const multer = require('multer')

const router = express.Router();

router.post('/upload-template', ProposalFormatsController.uploadTemplate);
router.get('/list-templates', ProposalFormatsController.getAllTemplates);
router.delete('/delete-template/:id', ProposalFormatsController.deleteTemplate);

module.exports = router;

