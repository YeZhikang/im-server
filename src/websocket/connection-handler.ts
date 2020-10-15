import EventEmitter from "eventemitter3";
import WebSocket from "ws";
import http from "http";

interface IConnectionHandler {
    events: EventEmitter;

    onConnection(ws: WebSocket, req: http.IncomingMessage): void;

    onMessage(ws: WebSocket, req: http.IncomingMessage): void;

    onClose(ws: WebSocket, req: http.IncomingMessage): void;

    onError(ws: WebSocket, req: http.IncomingMessage): void;

}

export class ConnectionHandler implements IConnectionHandler {
    readonly actives = new Map();
    readonly events: EventEmitter;

    constructor(events) {
        this.events = events;

        this.onConnection = this.onConnection.bind(this);

        this.events.on('connection', this.onConnection);
    }

    onConnection(ws: WebSocket, req: http.IncomingMessage) {
        ws.addEventListener('message', this.onMessage(ws, req));
        ws.addEventListener('close', this.onClose(ws, req));
        ws.addEventListener('error', this.onError(ws, req));
    }

    onMessage(ws: WebSocket, req: http.IncomingMessage) {
        return (data) => {
            // this.actives.set(req.headers.origin, ws)
            this.events.emit('message', req.headers, data.data)
        }
    }

    onClose(ws: WebSocket, req: http.IncomingMessage) {
        return (code, message) => {
            console.log(code, message)
        }
    }

    onError(ws: WebSocket, req: http.IncomingMessage) {
        return error => {
        }
    }

    sendMessage(origin, packet){

    }
}