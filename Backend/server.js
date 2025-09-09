const express = require('express')
const mongoose = require('mongoose')
const recommendationRoute = require("./routes/recommendationRoute.js")

const app = express()
app.use(express.json())

mongoose.connect("mongodb+srv://sathyanick17_db_user:GtRaeAFfK9rCtEW4@ai-proposal-generator-c.dtva1ok.mongodb.net/AI-proposalDB")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err))

app.use("/api/v1/recommendations", recommendationRoute)

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})