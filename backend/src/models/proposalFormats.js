const mongoose = require('mongoose')

const proposalFormatsSchema = new mongoose.Schema({
    format_name: { type: String, required: true },
    file_path: { type: String, required: true },
    file_type: { type: String, required: true },
    upload_date: { type: Date, default: Date.now }
})

module.exports = mongoose.model("proposalFormat", proposalFormatsSchema, "proposalFormat")
