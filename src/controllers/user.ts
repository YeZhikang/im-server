import UserDao from "../dao/user";

export default class UserController {

    async login(ctx, next){
        const userDao = new UserDao();
        // const {user, password} = ctx.body;
        const res = await userDao.findOne('121', '22');
        ctx.body = 'success'
    }

    async register(ctx, next){
        const userDao = new UserDao();
        const {user, password, location, email, selfIntroduction} = ctx.request.body;
        console.log(user, password, location)
        const res = await userDao.insertOne(user, password, location, email, selfIntroduction);
        console.log(ctx)
        ctx.success();
    }
}