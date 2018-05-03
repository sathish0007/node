import express from "express"
import doctorController from "../controller/doctorController"
const router = express.Router();

router.post('/createDoctor',doctorController.createDoctor);
router.get('/getDoctors',doctorController.getDoctors);
router.get('/doctors',doctorController.doctors);

export default router;