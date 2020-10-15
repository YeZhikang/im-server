import Koa from 'koa';
import routerHandler from './router/index';
import koaBodyParser from 'koa-bodyparser';
import cors from './middlewares/cors';
import {SocketService} from "./websocket";

const app = new Koa();
const socketService = new SocketService(3008);

app.use(koaBodyParser());
app.use(cors)
app.use(routerHandler(app));

app.listen(3020);