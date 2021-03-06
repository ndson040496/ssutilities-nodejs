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
    logger.log('ssutilities', logger.LogType.error, logger.LogLevel.allEnv, err.message)
    res.status(500).send({
        code: 0,
        message: 'Something went wrong'
    });
}

module.exports = handleError;
