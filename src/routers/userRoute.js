import express from 'express'
// import UserController from '../controller/userController'
import userController from '../controller/userController';
const router = express.Router();

router.post('/create-user', userController.createUser);
router.get('/getUsers',userController.getUsers);
router.post('/getUser',userController.getUser);
router.post('/deleteUser',userController.deleteUser);
router.post('/updateUsers',userController.updateUsers);

export default router;