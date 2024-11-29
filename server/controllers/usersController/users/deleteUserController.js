import userModel from "../../../models/usersModel/userModel.js";

export const deleteUserController = async(req, res) =>
{
    try
    {
        await userModel.findByIdAndDelete(req.params.userId).select("-avatar");
        res.status(200).send({
            success: true, 
            message: "User deleted successfully!"
        })
    }
    catch(error)
    {
        console.log(`Delete user controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: "Error occured while deleting user!",
            error
        })
    }
}