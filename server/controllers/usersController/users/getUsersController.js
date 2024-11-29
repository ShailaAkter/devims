import userModel from "../../../models/usersModel/userModel.js";

export const getUsersController = async(req, res) =>
{
    try
    {
        const users = await userModel.find({}).select("-avatar").populate('role').sort({createdAt: -1});

        
        res.status(201).send({
            success: true, 
            countTotal: users.length,
            message: "All users list",
            users
        })
    }
    catch(error)
    {
        console.log(`Get all users controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: 'Error occured while getting all users!',
            error
        })
    }
}