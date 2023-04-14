const mongoose = require("mongoose")
const jeepSchema = mongoose.Schema({
Jeep_name: String,
Jeep_color: String,
Jeep_price: Number
})
module.exports = mongoose.model("Jeep",jeepSchema)