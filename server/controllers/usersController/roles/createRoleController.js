import roleModel from "../../../models/usersModels/roleModel.js";

export const createRoleController = async (req, res) =>
{
    try
    {
        const {rolename, description} = req.body;
        if(!rolename)
        {
            return res.send({message: "Role name is required!"});
        }

        const role_name = checkCapital(rolename.trim());
    
        if(role_name.length < 2 || role_name.length > 25)
        {
            return res.send({message: "Name must contain more than 2 character!"});
        }

        if(!description) 
        {
            return res.send({message: "Description is required!"});
        }

        const existingRole = await roleModel.findOne({role_name});
        if(existingRole)
        {
            return res.status(200).send({
                success: false,
                message: "Role already exists!"
            })
        }

        const newRole = await new roleModel({role_name, description}).save();

        res.status(201).send({
            success: true,
            message: "New role created!",
            newRole
        })
    }
    catch(error)
    {
        console.log(`Create role controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: "Error occured while creating role!"
        });
    }
}