/**
 * 路由首页
 */


import KoaRouter from 'koa-router';
import errorHandler from '../middlewares/error';
import userRouter from './user';
import standardCtxBack from "../middlewares/body";

export default (app) => {
    // 总路由
    const router = new KoaRouter();
    // api 路由集
    const apiRouter = new KoaRouter();
    apiRouter.use('/user', userRouter())

    router.use('/api', errorHandler, standardCtxBack, apiRouter.routes());
    return router.routes();
}