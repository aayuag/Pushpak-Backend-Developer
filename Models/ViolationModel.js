const mongoose = require("mongoose")
const violationSchema = new mongoose.Schema({
   id : {
    type: String,
    required: true
   },
   licensePlateNumber : {
    type: String,
    required: true
   },
   violationType : {
    type: String,
    required: true
   },
   status : {
    type: String,
    required: true
   },
   date : {
    type: String,
    required: true
   },
   time : {
    type: String,
    required: true
   },
   location : {
    type: String,
    required: true
   },
   videoUrl : {
    type: String,
    required: true
   }
})
const violationModel = mongoose.model("violation",violationSchema)
module.exports = violationModel