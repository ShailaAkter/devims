import express from 'express';
import formidable from 'express-formidable';
import { createCustomerController } from '../controllers/peopleController/customers/createCustomerController.js';
import { updateCustomerController } from '../controllers/peopleController/customers/updateCustomerController.js';
import { getCustomersController } from '../controllers/peopleController/customers/getCustomersController.js';
import { getCustomerController } from '../controllers/peopleController/customers/getCustomerController.js';
import { getCustomerImageController } from '../controllers/peopleController/customers/getCustomerImageController.js';
import { deleteCustomerController } from '../controllers/peopleController/customers/deleteCusomerController.js';

import { createSupplierController } from '../controllers/peopleController/suppliers/createSupplierController.js';
import { getSuppliersController } from '../controllers/peopleController/suppliers/getSuppliersController.js';
import { getSupplierController } from '../controllers/peopleController/suppliers/getSupplierController.js';
import { updateSupplierController } from '../controllers/peopleController/suppliers/updateSupplierController.js';
import { deleteSupplierController } from '../controllers/peopleController/suppliers/deleteSupplierController.js';

//router object
const router = express.Router();


//routing for create customer post method
router.post('/create-customer',  formidable(), createCustomerController);

//routing for get all customer get method
router.get('/get-customers',  getCustomersController);

//routing for single customer get method
router.get('/get-customer/:customerId',  getCustomerController);

//routing for getting customer image get method
router.get('/get-customer-image/:customerId',  getCustomerImageController);

//routing for update customer put method
router.put('/update-customer/:customerId',  formidable(), updateCustomerController);

//routing for delete customer delete method
router.delete('/delete-customer/:customerId',  deleteCustomerController);



//routing for create supplier post method
router.post('/create-supplier', createSupplierController);

//routing for get all supplier method
router.get('/get-suppliers',  getSuppliersController);

//routing for single supplier get method
router.get('/get-supplier/:supplierId',  getSupplierController);

//routing for update supplier put method
router.put('/update-supplier/:supplierId', updateSupplierController);

//routing for delete supplier delete method
router.delete('/delete-supplier/:supplierId', deleteSupplierController);





export default router;