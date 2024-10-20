import slugify from "slugify";
import fs from 'fs';
import productModel from "../../../models/productsModel/productModel.js";


export const createProductController = async (req, res) =>
{
    try
    {
        const {productName, productCode, category, brand, orderTax, taxMethod, productDetails, productType, productCost, productPrice, unitProduct, unitSale, unitPurchase, minimumSaleQuantity, stockAlert} = req.fields;
        const {image} = req.files || {};

        if(!productName)
        {
            return res.send({message: "Product name is required!"})
        }

        if(!productCode)
        {
            return res.send({message: "Product Code is required!"})
        }

        if(!category)
        {
            return res.send({message: "Product category is required!"})
        }

        if(!brand)
        {
            return res.send({message: "Brand is required!"});
        }

        if(!orderTax)
        {
            return res.send({message: "Order tax is required!"});
        }

        if(!taxMethod)
        {
            return res.send({message: "Tax method is required!"});
        }

        if(!productDetails)
        {
            return res.send({message: "Product details is required!"});
        }

        if(!productType)
        {
            return res.send({message: "Product type is required!"});
        }

        if(!productCost)
        {
            return res.send({message: "Product cost is required!"});
        }

        if(!productPrice)
        {
            return res.send({message: "Product price is required!"});
        }

        if(!unitProduct)
        {
            return res.send({message: "Unit product is required!"});
        }

        if(!unitSale)
        {
            return res.send({message: "Unit sale is required!"});
        }

        if(!unitPurchase)
        {
            return res.send({message: "Unit purchase is required!"});
        }

        if(!minimumSaleQuantity)
        {
            return res.send({message: "Minimum sale quantity is required!"});
        }

        if(!stockAlert)
        {
            return res.send({message: "Stock alert is required!"});
        }

        if(!image)
        {  
            return res.send({message: "Product image is required!"});
        }

        const existingProduct = await productModel.findOne({productCode});
        if(existingProduct)
        {
            return res.status(200).send({
                success: false,
                message: "Product already exists with this code!"
            });
        }

        const newProduct = new productModel({
            ...req.fields, 
            slug: slugify(productName)
        });

        if(image)
        {
            newProduct.image.data = fs.readFileSync(image.path);
            newProduct.image.conentType = image.type;
        }

        await newProduct.save();

        res.status(201).send({
            success: true,
            message: "New Product created successfully!",
            newProduct
        })
    }
    catch(error)
    {
        console.log(`Create product controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: 'Error occured while creating new product!',
            error
        })
    }
}