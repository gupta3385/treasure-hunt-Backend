import User from '../models/user.js';

export const getScore = async (req, res) => {
    try{
        const user=await User.findById(req.user._id);
        
        const {score, total_attempted, wrong_attempted , start_time, end_time} = user;

        res.json({score, total_attempted, wrong_attempted, start_time, end_time});
       
        
    }
    catch(err){
        console.log(err);
    }
}