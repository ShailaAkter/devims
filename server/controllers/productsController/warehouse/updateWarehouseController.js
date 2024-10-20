import warehouseModel from "../../../models/productsModel/warehouseModel.js";

export const updateWarehouseController = async(req, res) =>
{
    try
    {
        const {name, email, phone, country, city, zipCode} = req.body;

        if(!name)
        {
            return res.send({message: "Name is required!"})
        }

        const slug = slugify(name, {
            lower: true, // Converts to lowercase
            strict: true // Removes special characters
        });

        if(!email)
        {
            return res.send({message: "Email is required!"})
        }
        if(checkEmail(email) === false)
        {
            return res.send({message: "Please insert valid email!"});
        }
          
        if(!phone)
        {
            return res.send({message: "Phone code is required!"})
        }

        if(!country)
        {
            return res.send({message: "Country code is required!"})
        }

        if(!city)
        {
            return res.send({message: "City code is required!"})
        }

        if(!zipCode)
        {
            return res.send({message: "Zip code is required!"})
        }

        const existingWarehouse = await warehouseModel.findOne({slug});
        
        if (existingWarehouse && existingWarehouse._id.toString() !== req.params.warehouseId) 
        {
            return res.status(400).send({
                success: false,
                message: "Warehouse already exists!"
            });
        }

        const updatedWarehouse = await warehouseModel.findByIdAndUpdate(
            req.params.warehouseId,
            {
                name, 
                email,
                phone,
                country,
                city,
                zipCode,
                slug
            },
            { new: true } 
        );

        res.status(200).send({
            success: true,
            message: "Warehouse updated successfully!",
            updatedWarehouse
        })
    }
    catch(error)
    {
        console.log(`Update warehouse controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: 'Error occured while updating warehouse!',
            error
        })
    }
}