const ajv = require("ajv");

function validateSchema(schema, data) {
    const validator = ajv({allErrors: true, useDefaults: true});
    const isValid = validator.validate(schema, data);
    if (!isValid) {
        return {
            isValid: false,
            message: validator.errors[0].message
        };
    }

    return {
        isValid: true,
        message: null
    };
}

module.exports = validateSchema;
