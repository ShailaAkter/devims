import categoryModel from "../../../models/productsModel/categoryModel.js";

export const updateAccountController = async(req, res) =>
{
    try
    {
        const {accountName, accountNumber, balance} = req.body;

        if(!accountName)
        {
            return res.send({message: "Account name is required!"})
        }

        const slug = slugify(accountName, {
            lower: true, // Converts to lowercase
            strict: true // Removes special characters
          });
          

        if(!accountNumber)
        {
            return res.send({message: "Account number is required!"})
        }

        if(!balance)
        {
            return res.send({message: "Balance is required!"})
        }


        const existingCategory = await categoryModel.findOne({categoryCode });
        
        if (existingCategory && existingCategory._id.toString() !== req.params.categoryId) 
        {
            return res.status(400).send({
                success: false,
                message: "Category already exists!"
            });
        }

        const updatedCategory = await categoryModel.findByIdAndUpdate(
            req.params.categoryId,
            {
                categoryCode,
                categoryName
            },
            { new: true } 
        );

        res.status(200).send({
            success: true,
            message: "Category updated successfully!",
            updatedCategory
        })
    }
    catch(error)
    {
        console.log(`Update category controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: 'Error occured while updating category!',
            error
        })
    }
}