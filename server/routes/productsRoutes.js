import express from 'express';
import formidable from 'express-formidable';
import { createCategoryController } from '../controllers/productsController/category/createCategoryController.js';
import { getCategoriesController } from '../controllers/productsController/category/getCategoriesController.js';
import { getCategoryController } from '../controllers/productsController/category/getCategoryController.js';
import { updateCategoryController } from '../controllers/productsController/category/updateCategoryController.js';
import { deleteCategoryController } from '../controllers/productsController/category/deleteCategoryController.js';


import { createUnitController } from '../controllers/productsController/unit/createUnitController.js';
import { getUnitsController } from '../controllers/productsController/unit/getUnitsController.js';
import { getUnitController } from '../controllers/productsController/unit/getUnitController.js';
import { updateUnitController } from '../controllers/productsController/unit/updateUnitController.js';
import { deleteUnitController } from '../controllers/productsController/unit/deleteUnitController.js';


import { createBrandController } from '../controllers/productsController/brand/createBrandController.js';
import { getBrandsController } from '../controllers/productsController/brand/getBrandsController.js';
import { getBrandController } from '../controllers/productsController/brand/getBrandController.js';
import { getBrandImageController } from '../controllers/productsController/brand/getBrandimageController.js';
import { updateBrandController } from '../controllers/productsController/brand/updateBrandController.js';
import { deleteBrandController } from '../controllers/productsController/brand/deleteBrandController.js';


import { createProductController } from '../controllers/productsController/product/createProductController.js';
import { getProductsController } from '../controllers/productsController/product/getProductsController.js';
import { getProductController } from '../controllers/productsController/product/getProductController.js';
import { getProductImageController } from '../controllers/productsController/product/getProductImageController.js';
import { updateProductController } from '../controllers/productsController/product/updateProductController.js';
import { deleteProductController } from '../controllers/productsController/product/deleteProductController.js';


import { createWarehouseController } from '../controllers/productsController/warehouse/createWarehouseController.js';
import { getWarehousesController } from '../controllers/productsController/warehouse/getWarehousesController.js';
import { getWarehouseController } from '../controllers/productsController/warehouse/getWarehouseController.js';
import { updateWarehouseController } from '../controllers/productsController/warehouse/updateWarehouseController.js';
import { deleteWarehouseController } from '../controllers/productsController/warehouse/deleteWarehouseController.js';

//router object
const router = express.Router();

//routing for create category post method
router.post('/create-category', createCategoryController);

//routing for get all categories method
router.get('/get-categories',  getCategoriesController);

//routing for single category get method
router.get('/get-category/:categoryId',  getCategoryController);

//routing for update category put method
router.put('/update-category/:categoryId', updateCategoryController);

//routing for delete category delete method
router.delete('/delete-category/:categoryId', deleteCategoryController);



//routing for create unit post method
router.post('/create-unit', createUnitController);

//routing for get all units method
router.get('/get-units',  getUnitsController);

//routing for single unit get method
router.get('/get-unit/:unitId',  getUnitController);

//routing for update unit put method
router.put('/update-unit/:unitId', updateUnitController);

//routing for delete unit delete method
router.delete('/delete-unit/:unitId', deleteUnitController);


//routing for create brand post method
router.post('/create-brand', formidable(), createBrandController);

//routing for get all brands method
router.get('/get-brands',  getBrandsController);

//routing for single brand get method
router.get('/get-brand/:brandId',  getBrandController);

//routing for single brand image get method
router.get('/get-brand-image/:brandId',  getBrandImageController);

//routing for update brand put method
router.put('/update-brand/:brandId', formidable(), updateBrandController);

//routing for delete brand delete method
router.delete('/delete-brand/:brandId', deleteBrandController);


//routing for create product post method
router.post('/create-product', formidable(), createProductController);

//routing for get all products method
router.get('/get-products',  getProductsController);

//routing for single product get method
router.get('/get-product/:productId',  getProductController);

//routing for single product image get method
router.get('/get-product-image/:productId',  getProductImageController);

//routing for update product put method
router.put('/update-product/:productId', formidable(), updateProductController);

//routing for delete product delete method
router.delete('/delete-product/:productId', deleteProductController);


//routing for create warehouse post method
router.post('/create-warehouse', createWarehouseController );

//routing for get all warehouses method
router.get('/get-warehouses',  getWarehousesController);

//routing for single warehouse get method
router.get('/get-warehouse/:warehouseId',  getWarehouseController);

//routing for update warehouse put method
router.put('/update-product/:warehouseId',  updateWarehouseController);

//routing for delete warehouse delete method
router.delete('/delete-product/:warehouseId', deleteWarehouseController);




export default router;