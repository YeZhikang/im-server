import EventEmitter from "eventemitter3";
import {Server} from 'ws'
import http from "http";
import {ConnectionHandler} from "./connection-handler";
import {MessageHandler} from "./message-handler";

interface ISocketService {
    onConnection(ws: WebSocket, req: http.IncomingMessage): void;
}

export class SocketService implements ISocketService{
    readonly eventbus: EventEmitter;
    readonly wss;
    readonly connectionHandler;
    readonly messageHandler;

    constructor(port) {
        this.wss = new Server({ port });
        this.eventbus = new EventEmitter();
        this.connectionHandler = new ConnectionHandler(this.eventbus);
        this.messageHandler = new MessageHandler(this.eventbus);
        this.onConnection = this.onConnection.bind(this);

        this.wss.on('connection', this.onConnection);
    }

    onConnection(ws: WebSocket, req: http.IncomingMessage){
        this.eventbus.emit('connection', ws, req);
    }

    onMessage(ws, req){

    }
}
