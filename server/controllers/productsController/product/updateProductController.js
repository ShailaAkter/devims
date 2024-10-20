import fs from 'fs';
import slugify from "slugify";
import productModel from '../../../models/productsModel/productModel.js';


export const updateProductController = async(req, res) =>
{
    try
    {
        const {productName, productCode, category, brand, orderTax, taxMethod, productDetails, productType, productCost, productPrice, unitProduct, unitSale, unitPurchase, minimumSaleQuantity, stockAlert} = req.fields;
        const {image} = req.files || {};

        const product = await productModel.findById(req.params.productId);
        if(!product) 
        {
            return res.status(404).send({
                success: false,
                message: "Product not found!"
            })
        }

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
        if(existingProduct && existingProduct._id.toString() !== req.params.productId)
        {
            return res.status(200).send({
                success: false,
                message: "Product already exists with this code!"
            });
        }

        const updatedProduct = await productModel.findByIdAndUpdate(req.params.productId,
            {
                ...req.fields,
                slug: slugify(productName)
            },
            {new: true}
        )

        if(image)
        {
            updatedProduct.image.data = fs.readFileSync(image.path);
            updatedProduct.image.conentType = image.type;
        }

        await updatedProduct.save();

        res.status(201).send({
            success: true,
            message: "Product updated successfully!",
            updatedProduct
        })


    }
    catch(error)
    {
        console.log(`Update product controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: "Error occured while updating product!"
        });
    }
}