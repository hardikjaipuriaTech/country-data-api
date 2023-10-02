function errorHandlingMiddleware(err, req, res, next) {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';

    res.status(status).json({ error: { status, message } });
}

module.exports = errorHandlingMiddleware;
