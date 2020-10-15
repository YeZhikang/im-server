import HttpError from "../error/HttpError";

const successBody = {
    message: 'success'
}

const standardCtxBack = async (ctx, next) => {
    ctx.success = function () {
        ctx.body = successBody
    };
    ctx.authFailed = function () {
        throw new HttpError(401, 'auth-failed')
    }
    await next();
}

export default standardCtxBack