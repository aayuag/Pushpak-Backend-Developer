const mongoose = require("mongoose")
const vechicleSchema = new mongoose.Schema({
   id : {
    type: String,
    required: true
   },
   licensePlateNumber : {
    type: String,
    required: true
   },
   manufacturerName : {
    type: String,
    required: true
   },
   model : {
    type: String,
    required: true
   },
   fuelType : {
    type: String,
    required: true
   },
   ownerName : {
    type: String,
    required: true
   },
   rc_status : {
    type: String,
    required: true
   },
   vehicleColor : {
    type: String,
    required: true
   },
   registrationDate : {
    type: String,
    required: true
   },
   insuranceUpto : {
    type: String,
    required: true
   },
   fitnessUpto : {
    type: String,
    required: true
   },
    roadTaxUpto: {
    type: String,
    required: true
   }
})
const vechicleModel = mongoose.model("vechicle",vechicleSchema)
module.exports = vechicleModel