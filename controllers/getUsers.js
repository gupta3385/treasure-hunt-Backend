import User from '../models/user.js';

export const getAllUsers = async (req, res) => {
    try{
    const users = await User.find();
    res.send(users);
 
    }
    catch(err){      

    res.status(500).send('Error retrieving users from database');

    }
}