const logger = require('./../logger');

class ServerError {
    constructor(code, customCode, message, internalMessage) {
        this.code = code;
        this.customCode = customCode;
        this.message = message;
        this.internalMessage = internalMessage;

        logger.log("server-error", logger.LogType.error, logger.LogLevel.allEnv, internalMessage);
    }

    static getError(error) {
        return new ServerError(error.code, error.customCode, error.message, error.internalMessage);
    }
}

module.exports = ServerError;
