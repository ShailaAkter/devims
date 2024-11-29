import userModel from "../../../models/usersModel/userModel.js";

export const getUserAvatarController = async(req, res) =>
{
    try
    {
        const user = await userModel.findById(req.params.userId).select("avatar");
        if(user.avatar.data)
        {
            res.set('Content-type', user.avatar.conentType);
            return res.status(200).send(user.avatar.data);
        }
    }
    catch(error)
    {
        console.log(`Get user avatar controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: "Error occured while getting user avatar!",
            error
        })
    }
}