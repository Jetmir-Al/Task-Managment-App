export class HttpError extends Error {
    statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
    }
}

export class ConfilctError extends HttpError {
    constructor(message = "Conflict request") {
        super(message, 409);
    }
}

export class BadRequestError extends HttpError {
    constructor(message = "Bad request") {
        super(message, 400);
    }
}

export class UnauthorizedError extends HttpError {
    constructor(message = "Unauthorized") {
        super(message, 401);
    }
}

export class NotFoundError extends HttpError {
    constructor(message = "Not found") {
        super(message, 404);
    }
}
