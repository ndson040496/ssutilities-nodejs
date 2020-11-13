const LogLevel = Object.freeze({
    devOnly: "devOnly",
    allEnv: "allEnv"
});

const LogType = Object.freeze({
    info: "info",
    warning: "warning",
    error: "error"
});

function log(source, type, level, log) {
    const env = process.env.NODE_ENV || 'development';
    const isDevelopment = env === 'development';
    if (level === LogLevel.devOnly && !isDevelopment) {
        return;
    }
    console.log(`${source} - ${type}: ${log}`);
}

module.exports = {
    log: log,
    LogType: LogType,
    LogLevel: LogLevel
};
