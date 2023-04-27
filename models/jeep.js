const mongoose = require("mongoose")
const jeepSchema = mongoose.Schema({
Jeep_name:{
    type:String,
    required: true,
    match:/^[a-zA-Z]+$/
} ,
Jeep_color: String,
Jeep_price: {
    type: Number,
    min: 1,
    max: 10
}
})
module.exports = mongoose.model("Jeep",jeepSchema)