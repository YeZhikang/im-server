import EventEmitter from "eventemitter3";
import {IncomingHttpHeaders} from 'http';

interface IMessageHandler{
    events: EventEmitter;
    onMessage(header: IncomingHttpHeaders, message: any): void;
}

export class MessageHandler implements IMessageHandler{
    readonly events: EventEmitter;

    constructor(eventbus) {
        this.events = eventbus;

        this.events.on('message', this.onMessage)
    }

    onMessage(header: IncomingHttpHeaders, message: any) {
        console.log(message, header)
    }
}