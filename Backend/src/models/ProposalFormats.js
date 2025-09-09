const mongoose = require('mongoose')

const proposalFormatsSchema = new mongoose.Schema({
    id: String,
    format_name: String,
    file_path: String,
    file_type: String,
    upload_date: Date
})

module.exports = mongoose.model("proposalFormat", proposalFormatsSchema, "proposalFormat")
