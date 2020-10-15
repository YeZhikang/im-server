export default class HttpError extends Error {
    public code;
    public message;

    constructor(code, message) {
        super();

        this.name = HttpError.name;
        this.code = code;
        this.message = message;
    }
}