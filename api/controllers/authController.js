import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { createError } from '../utils/error.js';

const JWT = 'tompolo123'

export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt).toString()


        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })
        await newUser.save()
        res.send({
            status: 201,
            msg: 'User has been created'
        })
    } catch (err) {
        next(err)
    }
}

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({username: req.body.username});
        if(!user)
             return next(createError(404, 'User not found'))

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordCorrect)
            return next(createError(400, 'Incorrect password'));
        
        const token = jwt.sign({id:user._id, isAdmin: user.isAdmin}, JWT)
        const {isAdmin, password, ...otherDetails} = user._doc
    
        res.status(200).json({...otherDetails})
   
    } catch (err) {
        next(err)
    }
}