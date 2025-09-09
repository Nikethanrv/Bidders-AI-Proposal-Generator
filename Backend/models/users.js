const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    auth_user_id: String,
    email: String,
    profile_status: String,
    bidder_type: String,
    profile_data: {
        full_name: String,
        experience_years: Number,
        primary_industry: String,
        company_name: String,
        company_registration_id: String,
        portfolio_link: String,
    },
    profile_embedding: [Number]
})

module.exports = mongoose.model("userProfile", userSchema, "userProfile")