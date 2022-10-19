const violationModel=require("../Models/ViolationModel")
const express = require("express")

const router = express.Router()

router.post("/add", (req, res) => {
    violationModel.find({ id: req.body.id }).then((data) => {
        if (data.length) {
            res.status(400).send("Violation Already Registered")
        } else {
            violationModel.create({
                id : req.body.id ,
                licensePlateNumber: req.body.licensePlateNumber,
                violationType: req.body.violationType,
                status: req.body.status,
                date:req.body.date,
                time:req.body.time,
                location:req.body.location,
                videoUrl:req.body.videoUrl
            }).then(() => {
                res.status(200).send(`${req.body.licensePlateNumber} violation details added successfully`);
            }).catch((err) => {
                res.status(400).send(err.message)
            })
        }
    })

});

router.get("/:id", (req, res) => {
    violationModel.find({id:req.params.id}).then((data) => {
        res.status(200).send(data)
    })
});

router.delete("/delete/:id", (req, res) => {
    violationModel.find({ productid: req.params.id }).then((data) => {
        if (data.length) {
            violationModel.deleteOne({ id: req.params.id }).then(() => {
                res.status(200).send("Violation Details deleted successfully")
            }).catch((err) => {
                res.status(400).send(err)
            })
        } else {
            res.status(400).send("No such Data")
        }
    })
});

router.post("/edit/:id", (req, res) => {
    violationModel.find({ id: req.params.id }).then((data) => {
        if (data.length) {
            violationModel.updateOne({ id: req.params.id }, { $set: req.body }).then((data) => {
                res.status(200).send(data)
            }).catch((err) => {
                res.status(400).send(err)
            })
        } else {
            res.status(400).send("No such Data")
        }
    })
});


module.exports = router