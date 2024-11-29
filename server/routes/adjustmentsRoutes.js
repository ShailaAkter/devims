import express from 'express';
import { createAdjustmentController } from '../controllers/adjustmentsController/createAdjustmentController.js';
import { getAdjustmentsController } from '../controllers/adjustmentsController/getAdjustmentsController.js';
import { getAdjustmentController } from '../controllers/adjustmentsController/getAdjustmentController.js';
import { updateAdjustmentController } from '../controllers/adjustmentsController/updateAdjustmentController.js';
import { deleteAdjustmentController } from '../controllers/adjustmentsController/deleteAdjustmentController.js';
 
//router object
const router = express.Router();


//routing for create adjustment post method
router.post('/create-adjustment', createAdjustmentController);

//routing for get all adjustments method
router.get('/get-adjustments',  getAdjustmentsController);

//routing for single adjustment get method
router.get('/get-adjustment/:adjustmentId',  getAdjustmentController);

//routing for update adjustment put method
router.put('/update-adjustment/:adjustmentId', updateAdjustmentController);

//routing for delete adjustment delete method
router.delete('/delete-adjustment/:adjustmentId', deleteAdjustmentController);


export default router;