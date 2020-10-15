import KoaRouter from 'koa-router'
import UserController from "../controllers/user";

export default () => {
    const router = new KoaRouter();
    const userController = new UserController();

    router.get('/login', userController.login)
    router.post('/register', userController.register)

    return router.routes()
}