import mongoose from 'mongoose'
import User from '../modal/userModel';

const createUser = async(req, res, next) => {
    const user = await new User({name: req.body.name, id: req.body.id});
    user.save();

    if (user) {
        res
            .status(200)
            .json({user, message: "user created"})
    }
}
const getUsers = async(req, res, next) => {
    let users = await User.find();
    // console.log(users)
    if (users.length >= 1) {
        res.json({users})
    }
}
const getUser = async(req, res, next) => {
    let users = await User.find({id: req.body.id});
    console.log(users)
    if (users.length >= 1) {
        res.json({users})
    }
}
const deleteUser = async(req, res, next) => {
    let users = await User.findOneAndRemove({id: req.body.id});
    //console.log(users);
    if (users.length >= 1) {
        //let id = req.body.id; users.slice(id, 1);
        res
            .status(200)
            .json({users, message: "user deleted successfully"});
    }
}
const updateUsers = (req, res, next) => {
    User.findOneAndUpdate({
        id: req.body.id
    }, {name: req.body.name})
        .exec()
        .then(users => {
            throw new error;
            console.log(users)
            res.json({users})
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })

}
export default {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUsers
}