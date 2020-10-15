import HttpError from '../error/HttpError';

export default async (ctx, next) => {
    try{
        await next()
    }catch (e){
        if(e instanceof HttpError){
            ctx.body = `url: ${ctx.request.url}\ncode: ${e.code} \nmessage: ${e.message}`;
            ctx.status = e.code;
        }else{
            ctx.body = e.message;
            ctx.status = 500;
        }
    }
}