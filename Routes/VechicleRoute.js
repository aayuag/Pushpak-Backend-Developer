const vechicleModel=require("../Models/VechicleModel")
const express = require("express")

const router = express.Router()

router.post("/add", (req, res) => {
    vechicleModel.find({ id: req.body.id }).then((data) => {
        if (data.length) {
            res.status(400).send("Vechicle Already Registered")
        } else {
            vechicleModel.create({
                id : req.body.id ,
                licensePlateNumber: req.body.licensePlateNumber,
                manufacturerName: req.body.manufacturerName,
                model: req.body.model,
                fuelType:req.body.fuelType,
                ownerName:req.body.ownerName,
                rc_status:req.body.rc_status,
                vehicleColor:req.body.vehicleColor,
                registrationDate:req.body.registrationDate,
                insuranceUpto:req.body.insuranceUpto,
                fitnessUpto:req.body.fitnessUpto,
                roadTaxUpto:req.body.roadTaxUpto
            }).then(() => {
                res.status(200).send(`${req.body.licensePlateNumber} added successfully`);
            }).catch((err) => {
                res.status(400).send(err.message)
            })
        }
    })

});

router.get("/:id", (req, res) => {
    // console.log(req.params.id)
    vechicleModel.find({id:req.params.id}).then((data) => {
        res.status(200).send(data)
    })
});

router.delete("/delete/:id", (req, res) => {
    vechicleModel.find({ productid: req.params.id }).then((data) => {
        if (data.length) {
            vechicleModel.deleteOne({ id: req.params.id }).then(() => {
                res.status(200).send("Vechicle Details deleted successfully")
            }).catch((err) => {
                res.status(400).send(err)
            })
        } else {
            res.status(400).send("No such Registration")
        }
    })
});

router.post("/edit/:id", (req, res) => {
    vechicleModel.find({ id: req.params.id }).then((data) => {
        if (data.length) {
            vechicleModel.updateOne({ id: req.params.id }, { $set: req.body }).then((data) => {
                res.status(200).send(data)
            }).catch((err) => {
                res.status(400).send(err)
            })
        } else {
            res.status(400).send("No such Registration")
        }
    })
});


module.exports = router