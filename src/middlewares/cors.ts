import cors from 'koa-cors';
import {Basic} from "../model/host";

export default cors({
    origin: Basic.HOST,
    credentials: true
})