import mongoose from "mongoose";
import Doctor from "../modal/doctorModel";
import aqp from 'api-query-params';

const createDoctor = async(req, res, next) => {
    const doctor = await new Doctor({doctorId: req.body.doctorId, doctorName: req.body.doctorName, consaltation: req.body.consaltation, status: req.body.status});
    doctor.save();
    if (doctor) {
        res
            .status(200)
            .json({doctor, message: "doctor inserted successfully"})
    }
}
const getDoctors = async(req, res, next) => {
    let doctors = await Doctor.find();

    if (doctors.length >= 1) {
        res
            .status(200)
            .json({doctors, messagae: "doctors fetched successfully"});
    }
}
const doctors = async(req, res, next) => {
    console.log(req.query.filter);
    if (req.query.filter == 1) {
        if (req.query.filter == 1 && req.query.consaltation >= 20) {
            let doctors = await Doctor.find({
                status: true,
             $or: [ { consaltation: { $gt: 20 } }, { consaltation: 20 } ]
            })
            if (doctors) {
                res
                    .status(200)
                    .json({doctors, message: "all doctors"})
            }
        } else if (req.query.filter == 1 && req.query.consaltation >= 10) {
            let doctors = await Doctor.find({
                status: true,
                $or: [ { consaltation: { $gt: 10 } }, { consaltation: 10 } ]
            })
            if (doctors) {
                res
                    .status(200)
                    .json({doctors, message: "all doctors"})
            }
        } else if (req.query.filter == 1 && req.query.consaltation == undefined) {
            let doctors = await Doctor.find({status: true});
            if (doctors) {
                res
                    .status(200)
                    .json({doctors, message: "active doctors"})
            }
        }
    } else if (req.query.filter == 0) {
        let doctors = await Doctor.find({status: false});
        if (doctors) {
            res
                .status(200)
                .json({doctors, message: "Inactive doctors"})
        }

    } else if (req.query.filter == undefined) {
        let doctors = await Doctor.find();
        if (doctors) {
            res
                .status(200)
                .json({doctors, message: "all doctors"})
        }

    }
}

export default {
    createDoctor,
    getDoctors,
    doctors
}