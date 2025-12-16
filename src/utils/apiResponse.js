// src/utils/apiResponse.js

exports.success = (res, message, data) => {
    return res.status(200).json({
        success: true,
        message: message,
        data: data
    });
};

exports.error = (res, message, code = 400, errors = []) => {
    return res.status(code).json({
        success: false,
        message: message,
        errors: errors
    });
};