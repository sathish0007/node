import mongoose from "mongoose"

const Schema = mongoose.Schema;

const doctorSchema=new Schema({
    doctorId:Number,
    doctorName:String,
    consaltation:Number,
    status:Boolean

})
const Doctor=mongoose.model('Doctor',doctorSchema);

export default Doctor;