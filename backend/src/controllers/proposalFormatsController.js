const mongoose = require('mongoose')
const proposalFormat = require('../models/ProposalFormats')

class ProposalFormatsController {
    static async uploadTemplate (req, res) {
        try {
            /*
            const { adminId } = req.body;

            if (!adminId)
                return res.status(400).json({
                    success: false,
                    message: "Admin ID is required"
                })
            
            if (!req.file)
                return res.status(400).json({
                    success: false,
                    message: "No file uploaded"
                })
            const { originalname, mimetype, path } = req.file;
            */
            const newTemplate = new proposalFormat({
                id: new mongoose.Types.ObjectId().toString(),
                format_name: originalname,
                file_path: path,
                file_type: mimetype,
                upload_date: new Date()
            });
            await newTemplate.save();

            res.json({
                success: true,
                message: "Template uploaded successfully",
                data: {
                    template: newTemplate
                }
            })
        } catch (error) {
            console.error("❌ Error uploading template:", error);
            res.status(500).json({
                success: false,
                message: "Failed to upload template"
            })
        }
    }

    static async getAllTemplates (req, res) {
        try {
            const templates = await proposalFormat.find().exec();
            res.json({
                success: true,
                message: "Templates fetched successfully",
                data: { templates }
            })
        } catch (error) {
            console.error("❌ Error fetching templates:", error);
            res.status(500).json({
                success: false,
                message: "Failed to fetch templates"
            })
        } 
    }

    static async deleteTemplate (req, res) {
        try {
            const templateId = req.params.id;
            if (!templateId)
                return res.status(400).json({
                    success: false,
                    message: "Template ID is required"
                })
            const deleted = await proposalFormat.findOneAndDelete({ id: templateId }).exec();
            if (!deleted)
                return res.status(404).json({
                    success: false,
                    message: "Template not found"
                })
            res.json({
                success: true,
                message: "Template deleted successfully",
                data: { template: deleted }
            })
        } catch (error) {
            console.error("❌ Error deleting template:", error);
            res.status(500).json({
                success: false,
                message: "Failed to delete template"
            })
        }
    }
}

module.exports = ProposalFormatsController;
