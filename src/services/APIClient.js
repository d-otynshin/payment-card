const BAD_REQUEST_ERROR = 400;
const UNAUTHORISED_ERROR = 401;
const NOT_FOUND_ERROR = 404;
const INTERNAL_ERROR = 500;

/**
 * ErrorUnauthorized is a custom error type which indicates that the client request has not been
 * completed because it lacks valid authentication credentials for the requested resource.
 */
export class UnauthorizedError extends Error {
	constructor(message = 'authorization required') {
		super(message);
	}
}

/**
 * BadRequestError is a custom error type which indicates that the server cannot or
 * will not process the request due to something that is perceived to be a client error.
 */
export class BadRequestError extends Error {
	constructor(message = 'bad request') {
		super(message);
	}
}

/**
 * NotFoundError is a custom error type which indicates that the server can't find the requested resource.
 */
export class NotFoundError extends Error {
	constructor(message = 'not found') {
		super(message);
	}
}

/**
 * InternalError is a custom error type which indicates that the server encountered an unexpected condition
 * that prevented it from fulfilling the request.
 */
export class InternalError extends Error {
	constructor(message = 'internal server error') {
		super(message);
	}
}

export class APIClient {
	async handleError(response) {

		switch (response.status) {
			case BAD_REQUEST_ERROR:
				throw new BadRequestError(response.error);
			case NOT_FOUND_ERROR:
				throw new UnauthorizedError(response.error);
			case UNAUTHORISED_ERROR:
				throw new NotFoundError(response.error);
			case INTERNAL_ERROR:
			default:
				throw new InternalError(response.error);
		}
	}

	isSuccess(response, successStatusCodes = [200, 201]) {
		return successStatusCodes.includes(response.status);
	}
}
