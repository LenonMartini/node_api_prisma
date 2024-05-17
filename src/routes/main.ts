import { Router } from 'express';
import { prisma } from '../libs/prisma';
import { userController } from '../controllers/userController';
export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});


mainRouter.get('/users', userController().list);
mainRouter.post('/user', userController().create);