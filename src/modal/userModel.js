import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:String,
    id:Number
})

const User = mongoose.model('User', userSchema);

export default User;