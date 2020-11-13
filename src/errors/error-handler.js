function handleError(err, req, res, next) {
    const ServerError = require('./server-error');
    const logger = require('./../logger');

    if (res.headersSent) {
        return next(err);
    }
    if (err instanceof ServerError) {
        res.status(err.code).json({code: err.customCode, message: err.message});
        return;
    }
    res.status(500).send('Something went wrong');
}

module.exports = handleError;
