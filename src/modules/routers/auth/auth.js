import express from 'express';
import AuthController from '../../controllers/auth/auth';
import Validators from '../../../shared/middlewares/validators/index';

const router = express.Router();

router.post('/signup', Validators.SignupValidator, AuthController.signUp);

export default router;
