import accountModel from "../../../models/accountingModel/accountModel.js";

export const createAccountController = async(req, res) =>
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

       
        const existingAccount = await accountModel.findOne({slug});
        if(existingAccount)
        {
            return res.status(200).send({
                success: false,
                message: "Category already exists!"
            });
        }

        const newAccount = await new accountModel({
            accountName, 
            accountNumber, 
            balance,
            slug
        }).save();

        res.status(201).send({
            success: true,
            message: "New Account created!",
            newAccount
        })
    }
    catch(error)
    {
        console.log(`Create account controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: 'Error occured while creating new account!',
            error
        })
    }
}