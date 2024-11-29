import userModel from "../../../models/usersModel/userModel.js";

export const getUserController = async(req, res) =>
{
    try
    {
        const user = await userModel.findById(req.params.userId).select("-avatar").populate("role");

        if (!user) 
        {
            return res.status(404).send({
                success: false,
                message: "User not found!"
            });
        }

        res.status(200).send({
            success: true,
            message: "Single User fetched!",
            user
        })
    }
    catch(error)
    {
        console.log(`Get user controller error = ${error}`);

        res.status(500).send({
            success: true, 
            message: "Error occured while getting single user!",
            error
        })
    }
}