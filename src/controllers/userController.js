import User from '../models/userModel.js';

export const getAllUsers = async (req, res) => {
    const users = await User.find({});

    res.json({
        success: true,
        users
    });
}

export const register = async (req, res) => {
    const {name, email, pass, password} = req.body;
    const user = await User.create({
        name, email, pass, password
    });

    res.status(201).json({
        success: true,
        message: 'Registered Successfully!!!'
    });
}

export const getUserDetails = async (req, res) => {
    const {id} = req.params;
    const user = await User.findById(id);

    res.status(201).json({
        success: true,
        user
    });
}