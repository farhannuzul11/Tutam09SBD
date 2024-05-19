import User from '../models/UserModel.js';

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getUserById = async (req, res) => {
    try {
        const users = await User.findById(req.params.id);
        res.json(users);
    } catch (error) {
        res.status(404).json({ message: error.message }); //404 itu not found
    }
}

export const saveUser = async (req, res) => {
    const user = new User(req.body); //harus dalam funtion
    try {
        const inserteduser = await user.save();
        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(400).json({ message: error.message }); //400, kesalahan dari sisi user
    }
}

export const updateUser = async (req, res) => {
    try {
        const updateduser = await User.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(201).json(updateduser);
    } catch (error) {
        res.status(400).json({ message: error.message }); //400, kesalahan dari sisi user
    }
}

export const deletedUser = async (req, res) => {
    try {
        const deleteduser = await User.deleteOne({_id:req.params.id});
        res.status(201).json(deleteduser);
    } catch (error) {
        res.status(400).json({ message: error.message }); //400, kesalahan dari sisi user
    }
}