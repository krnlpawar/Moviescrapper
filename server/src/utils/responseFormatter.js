const apiResponse = (res, data, message = 'Success', statusCode = 200) => {
    return res.status(statusCode).json({
        status: 'success',
        message,
        data,
    });
};

const apiError = (res, message = 'Error', statusCode = 500) => {
    return res.status(statusCode).json({
        status: 'error',
        message,
    });
};

export { apiResponse, apiError };