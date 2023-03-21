import User from "../models/User.js";

//update
export const updateUser = async (req, res, next) => {

        try {
            const updateUser = await 
            User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
            res.status(200).json(updateUser)
        } catch (err) {
            res.status(500).json(err.message)
        }
    
}

export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('User Deleted')
    } catch (err) {
        res.status(500).json(err.message)
    }
}

export const getUser = async (req, res, next) => {
    try {
        const user = User.findById(req.params.id);
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
}

export const getAllUser = async (req, res, next) => {
    try {
        const users = User.find();
        res.status(200).json(users)
    } catch (err) {
        next(err)
    }
}