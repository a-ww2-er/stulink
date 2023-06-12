export class ErrorResponse extends Error {
    statusCode: number | string;
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

