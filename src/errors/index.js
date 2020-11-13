const serverError = require('./server-error');
const errorHandler = require('./error-handler');

module.exports = {
    ServerError: serverError,
    errorHandler: errorHandler
}
