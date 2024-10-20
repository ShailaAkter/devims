import roleModel from "../../../models/usersModels/roleModel.js";

export const getRolesController = async (req, res) =>
{
    try
    {
        const roles = await roleModel.find({});
        res.status(200).send({
            success: true,
            message: "All roles list",
            roles
        })

    }
    catch(error)
    {
        console.log(`Get all roles controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: 'Error occured getting all roles!',
            error
        })
    }
}