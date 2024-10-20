import express from 'express';
import formidable from 'express-formidable';
import { createRoleController } from '../controllers/usersController/roles/createRoleController.js';
import { getRolesController } from '../controllers/usersController/roles/getRolesController.js';
import { createUserController } from '../controllers/usersController/users/createUserController.js';
import { updateUserController } from '../controllers/usersController/users/updateUserController.js';
import { getUsersController } from '../controllers/usersController/users/getUsersController.js';
import { getUserController } from '../controllers/usersController/users/getUserController.js';
import { deleteUserController } from '../controllers/usersController/users/deleteUserController.js';
import { getUserAvatarController } from '../controllers/usersController/users/getUserAvatarController.js';

//router object
const router = express.Router();

//routing for create role post method
router.post('/create-role', createRoleController);

//routing for getting all roles get method
router.get('/get-roles', getRolesController);


//routing for create user post method
router.post('/create-user',  formidable(), createUserController);

//routing for create user get method
router.get('/get-users', getUsersController);

//routing for single user get method
router.get('/get-user/:userId',  getUserController);

//routing for getting user avatar get method
router.get('/get-user-avatar/:userId',  getUserAvatarController);

//routing for update user put method
router.put('/update-user/:userId',  formidable(), updateUserController);

//routing for delete user delete method
router.delete('/delete-user/:userId',  deleteUserController);





export default router;