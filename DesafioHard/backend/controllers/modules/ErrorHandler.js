// FIX-IT: Add fine treatment in digest() method

class BadRequest extends Error {
	constructor(message) {
		super(message);
		this.code = 400;
		this.name = 'Bad Request';
		this.msg = message;
	}

	// Future update
	digest(context) {
		return;
	}
}

class NotFound extends Error {
	constructor(message) {
		super(message);
		this.code = 404;
		this.name = 'Not Found';
		this.msg = message;
	}

	// Future update
	digest(context) {
		return;
	}
}

class TooManyRequests extends Error {
	constructor(message) {
		super(message);
		this.code = 429;
		this.name = 'Too Many Requests';
		this.msg = message;
	}

	// Future update
	digest(context) {
		return;
	}
}

class InternalServerError extends Error {
	constructor(message) {
		super(message);
		this.code = 500;
		this.name = 'Internal Server Error';
		this.msg = message;
	}

	// Future update
	digest(context) {
		return;
	}
}

class ServiceUnavailable extends Error {
	constructor(message) {
		super(message);
		this.code = 503;
		this.name = 'Service Unavailable';
		this.msg = message;
	}

	// Future update
	digest(context) {
		return;
	}
}

module.exports = {
	BadRequest,
	NotFound,
	TooManyRequests,
	InternalServerError,
	ServiceUnavailable,
};
